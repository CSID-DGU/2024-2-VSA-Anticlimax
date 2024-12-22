import 'package:flutter/cupertino.dart';
import 'package:get/get.dart';
import 'package:get/get_connect/http/src/request/request.dart';
import 'package:wooahan/app/config/app_routes.dart';
import 'package:wooahan/app/env/common/environment_factory.dart';
import 'package:wooahan/app/utility/log_util.dart';
import 'package:wooahan/data/factory/storage_factory.dart';
import 'package:wooahan/data/provider/system/system_provider.dart';

abstract class BaseConnect extends GetConnect {
  static final GetHttpClient _customHttpClient = GetHttpClient();

  static final SystemProvider _systemProvider = StorageFactory.systemProvider;

  static const Map<String, String> useBearerToken = {
    "useBearerToken": "true",
  };

  static const Map<String, String> notUseBearerToken = {
    "useBearerToken": "false",
  };

  @override
  void onInit() {
    super.onInit();

    httpClient
      ..baseUrl = apiServerUrl
      ..defaultContentType = 'application/json; charset=utf-8'
      ..timeout = const Duration(seconds: 10);

    httpClient.addRequestModifier<dynamic>((request) {
      String? useBearerToken = request.headers["useBearerToken"];

      if (useBearerToken == "true") {
        request.headers["Authorization"] = "Bearer $accessToken";
      }

      if (useBearerToken == null) {
        request.headers["useBearerToken"] = "false";
      }

      LogUtil.info(
        "🛫 [${request.method}] ${request.url} | START",
      );

      return request;
    });

    httpClient.addResponseModifier((request, Response response) async {
      if (response.status.hasError) {
        LogUtil.error(
          "🚨 [${request.method}] ${request.url} | END (${response.body['error']['code']}, ${response.body['error']['message']}, ${response.body['error']['fields']})",
        );

        await _isExpiredTokens(
          request: request,
          statusCodeOrErrorCode: response.body['error']['code'],
        );
      } else {
        LogUtil.info(
          "🛬 [${request.method}] ${request.url} | END ${response.body}",
        );
      }

      return response;
    });

    httpClient.addAuthenticator<dynamic>((request) async {
      if (request.url.toString().contains("login")) {
        return request;
      }

      Response reissueResponse = await _reissueToken();

      if (!reissueResponse.hasError) {
        await _systemProvider.allocateTokens(
          accessToken: reissueResponse.body['data']['access_token'],
          refreshToken: reissueResponse.body['data']['refresh_token'],
        );
      } else {
        await _isExpiredTokens(
          request: request,
          statusCodeOrErrorCode: reissueResponse.statusCode!,
        );
      }

      return request;
    });

    httpClient.maxAuthRetries = 1;
  }

  Future<Response<dynamic>> _reissueToken() async {
    String refreshToken = _systemProvider.getRefreshToken();

    Response response;

    try {
      response = await _customHttpClient.post(
        "$apiServerUrl/auth/reissue/token",
        contentType: 'application/json; charset=utf-8',
        headers: {
          "Authorization": "Bearer $refreshToken",
        },
      );
    } catch (e) {
      response = const Response(
        statusCode: 401,
      );
    }

    return response;
  }

  Future<void> _isExpiredTokens({
    required Request<dynamic> request,
    required int statusCodeOrErrorCode,
  }) async {
    String useBearerToken = request.headers["useBearerToken"]!;

    if (((statusCodeOrErrorCode != 40100 &&
                statusCodeOrErrorCode.toString().startsWith("401")) ||
            statusCodeOrErrorCode == 40402) &&
        useBearerToken == "false") {
      await StorageFactory.systemProvider.deallocateTokens();

      Get.snackbar(
        "로그인 만료",
        "로그인이 만료되었습니다. 다시 로그인해주세요.",
      );

      Get.offAllNamed(AppRoutes.ROOT);
    }
  }

  @protected
  String get apiServerUrl => EnvironmentFactory.environment.apiServerUrl;

  @protected
  String get accessToken => _systemProvider.getAccessToken();
}
