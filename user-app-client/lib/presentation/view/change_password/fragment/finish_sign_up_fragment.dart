import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';
import 'package:wooahan/app/config/color_system.dart';
import 'package:wooahan/app/config/font_system.dart';
import 'package:wooahan/core/screen/base_screen.dart';
import 'package:wooahan/presentation/view_model/change_password/change_password_view_model.dart';
import 'package:wooahan/presentation/widget/common/button/primary/primary_fill_button.dart';

class FinishSignUpFragment extends BaseScreen<ChangePasswordViewModel> {
  const FinishSignUpFragment({super.key});

  @override
  Color? get screenBackgroundColor => ColorSystem.white;

  @override
  bool get wrapWithInnerSafeArea => true;

  @override
  bool get setTopInnerSafeArea => true;

  @override
  bool get setBottomInnerSafeArea => true;

  @override
  Widget buildBody(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20.0),
      child: CustomScrollView(
        physics: const NeverScrollableScrollPhysics(),
        slivers: [
          SliverFillRemaining(
            hasScrollBody: false,
            child: GestureDetector(
              onTap: () {
                FocusManager.instance.primaryFocus?.unfocus();
              },
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  ..._buildTitleViews(),
                  const Spacer(),
                  Center(
                    child: SvgPicture.asset(
                      "assets/icons/complete.svg",
                      width: 250,
                    ),
                  ),
                  const Spacer(),
                  _buildNextButton(),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  List<Widget> _buildTitleViews() {
    return [
      const Text(
        "비밀번호 변경 완료",
        style: FontSystem.H1,
      ),
      Text(
        "비밀번호 변경이 완료되었습니다.",
        style: FontSystem.H5.copyWith(
          color: ColorSystem.neutral.shade600,
        ),
      ),
    ];
  }

  Widget _buildNextButton() {
    return Container(
      width: Get.width,
      height: 60,
      margin: const EdgeInsets.symmetric(vertical: 20.0),
      child: PrimaryFillButton(
        width: Get.width,
        height: 60,
        content: '돌아가기',
        onPressed: () {
          Get.back();
        },
      ),
    );
  }
}
