import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:get/get.dart';
import 'package:image_picker/image_picker.dart';
import 'package:just_audio/just_audio.dart';
import 'package:wooahan/core/wrapper/state_wrapper.dart';
import 'package:wooahan/domain/condition/analysis/analysis_document_condition.dart';
import 'package:wooahan/domain/condition/correction/correct_document_text_condition.dart';
import 'package:wooahan/domain/usecase/anlaysis/analysis_document_use_case.dart';
import 'package:wooahan/domain/usecase/correction/correct_document_text_use_case.dart';

class TextToSpeechConverterViewModel extends GetxController {
  /* ------------------------------------------------------ */
  /* DI Fields -------------------------------------------- */
  /* ------------------------------------------------------ */
  late final AudioPlayer _audioPlayer;
  late final String _speechFilePath;

  late final PageController pageController;

  late final AnalysisDocumentUseCase _analysisDocumentUseCase;
  late final CorrectDocumentTextUsecase _correctDocumentTextUsecase;

  /* ------------------------------------------------------ */
  /* Private Fields --------------------------------------- */
  /* ------------------------------------------------------ */
  late final Rxn<XFile?> _image;

  late final RxBool _isViewingImage;
  late final RxString _analysisResult;

  late final RxBool _isFirstSpeaking;
  late final RxBool _isSpeaking;

  /* ------------------------------------------------------ */
  /* Public Fields ---------------------------------------- */
  /* ------------------------------------------------------ */
  XFile? get image => _image.value;

  bool get isViewingImage => _isViewingImage.value;
  String get analysisResult => _analysisResult.value;

  bool get isFirstSpeaking => _isFirstSpeaking.value;
  bool get isSpeaking => _isSpeaking.value;

  /* ------------------------------------------------------ */
  /* Method ----------------------------------------------- */
  /* ------------------------------------------------------ */
  @override
  void onInit() {
    super.onInit();

    _audioPlayer = AudioPlayer();

    pageController = PageController(initialPage: 0);

    _analysisDocumentUseCase = Get.find<AnalysisDocumentUseCase>();
    _correctDocumentTextUsecase = Get.find<CorrectDocumentTextUsecase>();

    _image = Rxn<XFile?>();

    _isViewingImage = false.obs;
    _analysisResult = ''.obs;

    _isFirstSpeaking = true.obs;
    _isSpeaking = false.obs;
  }

  @override
  void onReady() {
    super.onReady();

    // 끝났을 때 상태 변경
    _audioPlayer.playerStateStream.listen((event) {
      if (event.processingState == ProcessingState.completed) {
        _audioPlayer.seek(const Duration(seconds: 0));
        _isSpeaking.value = false;
      }
    });
  }

  @override
  void dispose() {
    super.dispose();

    _audioPlayer.dispose();
  }

  void takePicture() async {
    final XFile? image = await ImagePicker().pickImage(
      source: ImageSource.camera,
    );

    if (image != null) {
      _image.value = image;
    }
  }

  void analysisPicture() async {
    pageController.nextPage(
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeInOut,
    );

    StateWrapper<String> beforeResult = await _analysisDocumentUseCase.execute(
      AnalysisDocumentCondition(file: File(_image.value!.path)),
    );

    if (beforeResult.success) {
      StateWrapper<Map<String, String>> afterResult =
          await _correctDocumentTextUsecase.execute(
        CorrectDocumentTextCondition(content: beforeResult.data!),
      );

      if (afterResult.success) {
        _analysisResult.value = afterResult.data!['text']!;
        _speechFilePath = afterResult.data!['urlPath']!;

        await _audioPlayer.setUrl(_speechFilePath);
      }
    }

    pageController.nextPage(
      duration: const Duration(milliseconds: 300),
      curve: Curves.easeInOut,
    );
  }

  void updateViewing() {
    _isViewingImage.value = !_isViewingImage.value;
  }

  void startSpeaking() {
    _isFirstSpeaking.value = false;
    _isSpeaking.value = !_isSpeaking.value;

    _audioPlayer.play();
  }

  void pauseSpeaking() async {
    await _audioPlayer.stop();
    await _audioPlayer.seek(const Duration(seconds: 0));

    _isSpeaking.value = !_isSpeaking.value;
  }
}
