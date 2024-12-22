import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';
import 'package:wooahan/app/config/app_config.dart';
import 'package:wooahan/app/config/app_dependence.dart';
import 'package:wooahan/app/config/app_pages.dart';
import 'package:wooahan/app/config/app_routes.dart';
import 'package:wooahan/app/config/color_system.dart';

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);

    return GetMaterialApp(
      // App Title
      title: AppConfig.APP_TITLE,

      // Localization
      locale: Get.deviceLocale,
      fallbackLocale: const Locale('ko', 'KR'),

      // Theme
      theme: ThemeData(
        colorScheme: ColorSystem.colorScheme,
        scaffoldBackgroundColor: ColorSystem.white,
      ),

      // Initial Route
      initialRoute: AppRoutes.SPLASH,
      initialBinding: AppDependency(),

      // Routes
      getPages: AppPages.data,
    );
  }
}
