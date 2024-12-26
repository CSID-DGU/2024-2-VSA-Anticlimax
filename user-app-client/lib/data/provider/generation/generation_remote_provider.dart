import 'package:wooahan/core/wrapper/response_wrapper.dart';

abstract class GenerationRemoteProvider {
  Future<ResponseWrapper> postSpeechFile({
    required String text,
  });
}
