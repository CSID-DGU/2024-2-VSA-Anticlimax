import 'package:get/get.dart';
import 'package:wooahan/core/usecase/async_condition_usecase.dart';
import 'package:wooahan/core/usecase/common/base_use_case.dart';
import 'package:wooahan/core/wrapper/state_wrapper.dart';
import 'package:wooahan/domain/condition/correction/correct_document_text_condition.dart';
import 'package:wooahan/domain/repository/correction/correction_repository.dart';
import 'package:wooahan/domain/repository/generation/generation_repository.dart';

class CorrectDocumentTextUsecase extends BaseUseCase
    implements
        AsyncConditionUseCase<Map<String, String>,
            CorrectDocumentTextCondition> {
  late final CorrectionRepository _correctionRepository;
  late final GenerationRepository _generationRepository;

  @override
  void onInit() {
    _correctionRepository = Get.find<CorrectionRepository>();
    _generationRepository = Get.find<GenerationRepository>();

    super.onInit();
  }

  @override
  Future<StateWrapper<Map<String, String>>> execute(
    CorrectDocumentTextCondition condition,
  ) async {
    StateWrapper<String> correctionResult =
        await _correctionRepository.correctDocumentText(
      condition,
    );

    StateWrapper<String> generationResult =
        await _generationRepository.generateSpeechFile(
      correctionResult.data!,
    );

    return StateWrapper<Map<String, String>>(
      success: true,
      data: {
        'text': correctionResult.data!,
        'urlPath': generationResult.data!,
      },
    );
  }
}
