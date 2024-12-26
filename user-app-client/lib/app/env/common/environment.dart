import 'package:firebase_core/firebase_core.dart';

abstract class Environment {
  String get apiServerUrl;
  String get drugServerUrl;
  String get ttsServerUrl;
  String get ttsClientId;
  String get ttsApiKey;
  FirebaseOptions get firebaseOptions;
}
