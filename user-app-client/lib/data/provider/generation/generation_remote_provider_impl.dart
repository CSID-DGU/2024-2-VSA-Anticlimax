import 'package:wooahan/app/env/common/environment_factory.dart';
import 'package:wooahan/core/provider/base_connect.dart';
import 'package:wooahan/core/wrapper/response_wrapper.dart';
import 'package:wooahan/data/provider/generation/generation_remote_provider.dart';

class GenerationRemoteProviderImpl extends BaseConnect
    implements GenerationRemoteProvider {
  @override
  String get apiServerUrl => EnvironmentFactory.environment.drugServerUrl;

  @override
  Future<ResponseWrapper> postSpeechFile({
    required String text,
  }) async {
    final response = await post(
      '/api/v1/analysis/speech',
      {
        'text': text,
      },
      headers: {...BaseConnect.notUseBearerToken},
    );

    if (response.hasError) {
      return ResponseWrapper(
        success: false,
        message: "음성 변환에 실패 했습니다.",
      );
    }

    return ResponseWrapper.fromJson(response.body);
  }
}
