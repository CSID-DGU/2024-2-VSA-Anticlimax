import 'package:get/get.dart';
import 'package:wooahan/core/wrapper/response_wrapper.dart';
import 'package:wooahan/core/wrapper/state_wrapper.dart';
import 'package:wooahan/data/provider/generation/generation_remote_provider.dart';
import 'package:wooahan/domain/repository/generation/generation_repository.dart';

class GenerationRepositoryImpl extends GetxService
    implements GenerationRepository {
  late final GenerationRemoteProvider _generationRemoteProvider;

  @override
  void onInit() {
    super.onInit();

    _generationRemoteProvider = Get.find<GenerationRemoteProvider>();
  }

  @override
  Future<StateWrapper<String>> generateSpeechFile(String text) async {
    ResponseWrapper response = await _generationRemoteProvider.postSpeechFile(
      text: text,
    );

    if (response.isFailure) {
      return StateWrapper(
        success: response.success,
        message: response.message,
      );
    }

    return StateWrapper(
      success: response.success,
      data: response.data!['result'],
    );
  }
}
