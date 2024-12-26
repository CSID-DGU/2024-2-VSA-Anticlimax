import 'package:wooahan/core/wrapper/state_wrapper.dart';

abstract class GenerationRepository {
  Future<StateWrapper<String>> generateSpeechFile(
    String text,
  );
}
