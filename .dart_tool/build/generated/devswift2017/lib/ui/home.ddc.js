define(['dart_sdk', 'packages/devswift2017/models/education', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/devswift2017/utils/screen/screen_utils', 'packages/devswift2017/widgets/responsive_widget', 'packages/flutter_web/src/animation/animation', 'packages/devswift2017/constants/text_styles', 'packages/devswift2017/constants/strings'], function(dart_sdk, packages__devswift2017__models__education, packages__flutter_web__material, packages__flutter_web_ui__ui, packages__flutter_web__animation, packages__devswift2017__utils__screen__screen_utils, packages__devswift2017__widgets__responsive_widget, packages__flutter_web__src__animation__animation, packages__devswift2017__constants__text_styles, packages__devswift2017__constants__strings) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const education = packages__devswift2017__models__education.models__education;
  const material = packages__flutter_web__material.src__material__material;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const colors = packages__flutter_web__material.src__material__colors;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const material_button = packages__flutter_web__material.src__material__material_button;
  const drawer = packages__flutter_web__material.src__material__drawer;
  const divider = packages__flutter_web__material.src__material__divider;
  const chip = packages__flutter_web__material.src__material__chip;
  const ui = packages__flutter_web_ui__ui.ui;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const preferred_size = packages__flutter_web__animation.src__widgets__preferred_size;
  const layout_builder = packages__flutter_web__animation.src__widgets__layout_builder;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const box = packages__flutter_web__animation.src__rendering__box;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const text_span = packages__flutter_web__animation.src__painting__text_span;
  const text = packages__flutter_web__animation.src__widgets__text;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const single_child_scroll_view = packages__flutter_web__animation.src__widgets__single_child_scroll_view;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const image = packages__flutter_web__animation.src__widgets__image;
  const gesture_detector = packages__flutter_web__animation.src__widgets__gesture_detector;
  const screen_utils = packages__devswift2017__utils__screen__screen_utils.utils__screen__screen_utils;
  const responsive_widget = packages__devswift2017__widgets__responsive_widget.widgets__responsive_widget;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const text_styles = packages__devswift2017__constants__text_styles.constants__text_styles;
  const strings = packages__devswift2017__constants__strings.constants__strings;
  const home = Object.create(dart.library);
  const $replaceFirst = dartx.replaceFirst;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $open = dartx.open;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfEducation = () => (JSArrayOfEducation = dart.constFn(_interceptors.JSArray$(education.Education)))();
  let BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let StringToPadding = () => (StringToPadding = dart.constFn(dart.fnType(basic.Padding, [core.String])))();
  let EducationToWidget = () => (EducationToWidget = dart.constFn(dart.fnType(framework.Widget, [education.Education])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 31,
        line: 24,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 17,
        line: 24,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 11,
        line: 21,
        file: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "appBar",
        column: 11,
        line: 22,
        file: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "drawer",
        column: 11,
        line: 23,
        file: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 11,
        line: 24,
        file: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C4 || CT.C4,
        name: null,
        column: 16,
        line: 20,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 9,
        line: 17,
        file: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 20,
        file: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C10 || CT.C10,
        name: null,
        column: 14,
        line: 16,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 7,
        line: 15,
        file: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 16,
        file: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C14 || CT.C14,
        name: null,
        column: 12,
        line: 14,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "titleSpacing",
        column: 7,
        line: 34,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 7,
        line: 35,
        file: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 7,
        line: 36,
        file: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 7,
        line: 37,
        file: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "actions",
        column: 7,
        line: 38,
        file: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C18 || CT.C18,
        name: null,
        column: 12,
        line: 33,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 7,
        line: 45,
        file: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C25 || CT.C25,
        name: null,
        column: 12,
        line: 44,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 19,
        line: 70,
        file: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 11,
        line: 71,
        file: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C28 || CT.C28,
        name: null,
        column: 16,
        line: 69,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 69,
        file: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 9,
        line: 75,
        file: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C32 || CT.C32,
        name: null,
        column: 7,
        line: 68,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 19,
        line: 79,
        file: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 11,
        line: 80,
        file: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C36 || CT.C36,
        name: null,
        column: 16,
        line: 78,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 78,
        file: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 9,
        line: 82,
        file: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C40 || CT.C40,
        name: null,
        column: 7,
        line: 77,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 19,
        line: 86,
        file: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 11,
        line: 87,
        file: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C44 || CT.C44,
        name: null,
        column: 16,
        line: 85,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 85,
        file: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 9,
        line: 89,
        file: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C48 || CT.C48,
        name: null,
        column: 7,
        line: 84,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [_bottom]: 20,
        [_right]: 20,
        [_top]: 20,
        [_left]: 20
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 15,
        line: 98,
        file: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 99,
        file: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C53 || CT.C53,
        name: null,
        column: 20,
        line: 97,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 97,
        file: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C57 || CT.C57,
        name: null,
        column: 11,
        line: 96,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "largeScreen",
        column: 11,
        line: 111,
        file: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mediumScreen",
        column: 11,
        line: 112,
        file: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "smallScreen",
        column: 11,
        line: 113,
        file: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C60 || CT.C60,
        name: null,
        column: 16,
        line: 110,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "constraints",
        column: 9,
        line: 108,
        file: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 110,
        file: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C65 || CT.C65,
        name: null,
        column: 14,
        line: 107,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 107,
        file: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C69 || CT.C69,
        name: null,
        column: 12,
        line: 106,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "flex",
        column: 26,
        line: 129,
        file: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 35,
        line: 129,
        file: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C72 || CT.C72,
        name: null,
        column: 17,
        line: 129,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 15,
        line: 127,
        file: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 128,
        file: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C76 || CT.C76,
        name: null,
        column: 20,
        line: 126,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 126,
        file: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C80 || CT.C80,
        name: null,
        column: 11,
        line: 125,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 9,
        line: 122,
        file: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 9,
        line: 123,
        file: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 124,
        file: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C83 || CT.C83,
        name: null,
        column: 14,
        line: 121,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 121,
        file: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C88 || CT.C88,
        name: null,
        column: 12,
        line: 120,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "flex",
        column: 26,
        line: 150,
        file: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 35,
        line: 150,
        file: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C91 || CT.C91,
        name: null,
        column: 17,
        line: 150,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 15,
        line: 148,
        file: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 149,
        file: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C95 || CT.C95,
        name: null,
        column: 20,
        line: 147,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 147,
        file: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C99 || CT.C99,
        name: null,
        column: 11,
        line: 146,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 9,
        line: 143,
        file: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 9,
        line: 144,
        file: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 145,
        file: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C102 || CT.C102,
        name: null,
        column: 14,
        line: 142,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 142,
        file: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C107 || CT.C107,
        name: null,
        column: 12,
        line: 141,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "flex",
        column: 20,
        line: 165,
        file: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 29,
        line: 165,
        file: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C110 || CT.C110,
        name: null,
        column: 11,
        line: 165,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C114() {
      return C114 = dart.constList([], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C114 || CT.C114,
        name: null,
        column: 11,
        line: 166,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 15,
        line: 169,
        file: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C116 || CT.C116,
        name: null,
        column: 11,
        line: 168,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 15,
        line: 172,
        file: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C119 || CT.C119,
        name: null,
        column: 11,
        line: 171,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 9,
        line: 163,
        file: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 164,
        file: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C122 || CT.C122,
        name: null,
        column: 14,
        line: 162,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 162,
        file: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C126 || CT.C126,
        name: null,
        column: 12,
        line: 161,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 14,
        line: 180,
        file: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 7,
        line: 181,
        file: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C129 || CT.C129,
        name: null,
        column: 18,
        line: 179,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 18,
        line: 191,
        file: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C133 || CT.C133,
        name: null,
        column: 9,
        line: 191,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 18,
        line: 193,
        file: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C136 || CT.C136,
        name: null,
        column: 9,
        line: 193,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 18,
        line: 195,
        file: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C139 || CT.C139,
        name: null,
        column: 9,
        line: 195,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 18,
        line: 197,
        file: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C142 || CT.C142,
        name: null,
        column: 9,
        line: 197,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 28,
        line: 204,
        file: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C145 || CT.C145,
        name: null,
        column: 19,
        line: 204,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 17,
        line: 200,
        file: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 201,
        file: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 202,
        file: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150, C151 || CT.C151], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C148 || CT.C148,
        name: null,
        column: 15,
        line: 199,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 7,
        line: 187,
        file: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 7,
        line: 188,
        file: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 7,
        line: 189,
        file: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 190,
        file: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155, C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C153 || CT.C153,
        name: null,
        column: 12,
        line: 186,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 7,
        line: 215,
        file: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C159 || CT.C159,
        name: null,
        column: 12,
        line: 214,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 11,
        line: 243,
        file: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 7,
        line: 245,
        file: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C162 || CT.C162,
        name: null,
        column: 12,
        line: 241,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 17,
        line: 253,
        file: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 9,
        line: 254,
        file: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167, C168 || CT.C168], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C166 || CT.C166,
        name: null,
        column: 14,
        line: 252,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 7,
        line: 251,
        file: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 252,
        file: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171, C172 || CT.C172], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C170 || CT.C170,
        name: null,
        column: 12,
        line: 250,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "flex",
        column: 11,
        line: 264,
        file: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 265,
        file: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175, C176 || CT.C176], widget_inspector._Location);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C174 || CT.C174,
        name: null,
        column: 9,
        line: 263,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 18,
        line: 267,
        file: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179], widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C178 || CT.C178,
        name: null,
        column: 9,
        line: 267,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "flex",
        column: 11,
        line: 269,
        file: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 270,
        file: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C181 || CT.C181,
        name: null,
        column: 9,
        line: 268,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 7,
        line: 261,
        file: null
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 262,
        file: null
      });
    },
    get C185() {
      return C185 = dart.constList([C186 || CT.C186, C187 || CT.C187], widget_inspector._Location);
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C185 || CT.C185,
        name: null,
        column: 12,
        line: 260,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 15,
        line: 293,
        file: null
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 294,
        file: null
      });
    },
    get C189() {
      return C189 = dart.constList([C190 || CT.C190, C191 || CT.C191], widget_inspector._Location);
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C189 || CT.C189,
        name: null,
        column: 25,
        line: 292,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 14,
        line: 303,
        file: null
      });
    },
    get C193() {
      return C193 = dart.constList([C194 || CT.C194], widget_inspector._Location);
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C193 || CT.C193,
        name: null,
        column: 9,
        line: 303,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 7,
        line: 299,
        file: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 7,
        line: 300,
        file: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 301,
        file: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197, C198 || CT.C198, C199 || CT.C199], widget_inspector._Location);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C196 || CT.C196,
        name: null,
        column: 12,
        line: 298,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 15,
        line: 310,
        file: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 7,
        line: 311,
        file: null
      });
    },
    get C201() {
      return C201 = dart.constList([C202 || CT.C202, C203 || CT.C203], widget_inspector._Location);
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C201 || CT.C201,
        name: null,
        column: 12,
        line: 309,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 9,
        line: 318,
        file: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 9,
        line: 319,
        file: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206, C207 || CT.C207], widget_inspector._Location);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C205 || CT.C205,
        name: null,
        column: 14,
        line: 317,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "label",
        column: 7,
        line: 317,
        file: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210], widget_inspector._Location);
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C209 || CT.C209,
        name: null,
        column: 12,
        line: 316,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 18,
        line: 345,
        file: null
      });
    },
    get C212() {
      return C212 = dart.constList([C213 || CT.C213], widget_inspector._Location);
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C212 || CT.C212,
        name: null,
        column: 9,
        line: 345,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 7,
        line: 343,
        file: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 344,
        file: null
      });
    },
    get C215() {
      return C215 = dart.constList([C216 || CT.C216, C217 || CT.C217], widget_inspector._Location);
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C215 || CT.C215,
        name: null,
        column: 12,
        line: 342,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 19,
        line: 355,
        file: null
      });
    },
    get C219() {
      return C219 = dart.constList([C220 || CT.C220], widget_inspector._Location);
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C219 || CT.C219,
        name: null,
        column: 12,
        line: 355,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 32,
        line: 365,
        file: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 13,
        line: 366,
        file: null
      });
    },
    get C222() {
      return C222 = dart.constList([C223 || CT.C223, C224 || CT.C224], widget_inspector._Location);
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C222 || CT.C222,
        name: null,
        column: 11,
        line: 364,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 40,
        line: 369,
        file: null
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 13,
        line: 370,
        file: null
      });
    },
    get C226() {
      return C226 = dart.constList([C227 || CT.C227, C228 || CT.C228], widget_inspector._Location);
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C226 || CT.C226,
        name: null,
        column: 11,
        line: 368,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 48,
        line: 375,
        file: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 13,
        line: 376,
        file: null
      });
    },
    get C230() {
      return C230 = dart.constList([C231 || CT.C231, C232 || CT.C232], widget_inspector._Location);
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C230 || CT.C230,
        name: null,
        column: 11,
        line: 374,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 9,
        line: 362,
        file: null
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 363,
        file: null
      });
    },
    get C234() {
      return C234 = dart.constList([C235 || CT.C235, C236 || CT.C236], widget_inspector._Location);
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C234 || CT.C234,
        name: null,
        column: 14,
        line: 361,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 7,
        line: 360,
        file: null
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 361,
        file: null
      });
    },
    get C238() {
      return C238 = dart.constList([C239 || CT.C239, C240 || CT.C240], widget_inspector._Location);
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C238 || CT.C238,
        name: null,
        column: 12,
        line: 359,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C114 || CT.C114,
        name: null,
        column: 9,
        line: 386,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 394,
        file: null
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 17,
        line: 395,
        file: null
      });
    },
    get C243() {
      return C243 = dart.constList([C244 || CT.C244, C245 || CT.C245], widget_inspector._Location);
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C243 || CT.C243,
        name: null,
        column: 15,
        line: 393,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 398,
        file: null
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 17,
        line: 399,
        file: null
      });
    },
    get C247() {
      return C247 = dart.constList([C248 || CT.C248, C249 || CT.C249], widget_inspector._Location);
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C247 || CT.C247,
        name: null,
        column: 15,
        line: 397,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 13,
        line: 390,
        file: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 13,
        line: 391,
        file: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 392,
        file: null
      });
    },
    get C251() {
      return C251 = dart.constList([C252 || CT.C252, C253 || CT.C253, C254 || CT.C254], widget_inspector._Location);
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C251 || CT.C251,
        name: null,
        column: 18,
        line: 389,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 11,
        line: 388,
        file: null
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 389,
        file: null
      });
    },
    get C256() {
      return C256 = dart.constList([C257 || CT.C257, C258 || CT.C258], widget_inspector._Location);
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C256 || CT.C256,
        name: null,
        column: 9,
        line: 387,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 385,
        file: null
      });
    },
    get C260() {
      return C260 = dart.constList([C261 || CT.C261], widget_inspector._Location);
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C260 || CT.C260,
        name: null,
        column: 12,
        line: 384,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 15,
        line: 410,
        file: null
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 7,
        line: 411,
        file: null
      });
    },
    get C263() {
      return C263 = dart.constList([C264 || CT.C264, C265 || CT.C265], widget_inspector._Location);
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C263 || CT.C263,
        name: null,
        column: 12,
        line: 409,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 20,
        line: 428,
        file: null
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 13,
        line: 429,
        file: null
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 13,
        line: 430,
        file: null
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 431,
        file: null
      });
    },
    get C267() {
      return C267 = dart.constList([C268 || CT.C268, C269 || CT.C269, C270 || CT.C270, C271 || CT.C271], widget_inspector._Location);
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C267 || CT.C267,
        name: null,
        column: 24,
        line: 427,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 11,
        line: 423,
        file: null
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 427,
        file: null
      });
    },
    get C273() {
      return C273 = dart.constList([C274 || CT.C274, C275 || CT.C275], widget_inspector._Location);
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C273 || CT.C273,
        name: null,
        column: 9,
        line: 422,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 18,
        line: 434,
        file: null
      });
    },
    get C277() {
      return C277 = dart.constList([C278 || CT.C278], widget_inspector._Location);
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C277 || CT.C277,
        name: null,
        column: 9,
        line: 434,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 20,
        line: 440,
        file: null
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 13,
        line: 441,
        file: null
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 13,
        line: 442,
        file: null
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 443,
        file: null
      });
    },
    get C280() {
      return C280 = dart.constList([C281 || CT.C281, C282 || CT.C282, C283 || CT.C283, C284 || CT.C284], widget_inspector._Location);
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C280 || CT.C280,
        name: null,
        column: 24,
        line: 439,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 11,
        line: 436,
        file: null
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 439,
        file: null
      });
    },
    get C286() {
      return C286 = dart.constList([C287 || CT.C287, C288 || CT.C288], widget_inspector._Location);
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C286 || CT.C286,
        name: null,
        column: 9,
        line: 435,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 7,
        line: 419,
        file: null
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 7,
        line: 420,
        file: null
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 421,
        file: null
      });
    },
    get C290() {
      return C290 = dart.constList([C291 || CT.C291, C292 || CT.C292, C293 || CT.C293], widget_inspector._Location);
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C290 || CT.C290,
        name: null,
        column: 12,
        line: 418,
        file: "org-dartlang-app:///packages/devswift2017/ui/home.dart"
      });
    }
  });
  const _buildAppBar = dart.privateName(home, "_buildAppBar");
  const _buildDrawer = dart.privateName(home, "_buildDrawer");
  const _buildBody = dart.privateName(home, "_buildBody");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C8;
  let C4;
  let C3;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C16;
  let C14;
  let C13;
  const _buildTitle = dart.privateName(home, "_buildTitle");
  const _buildActions = dart.privateName(home, "_buildActions");
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C18;
  let C17;
  let C26;
  let C25;
  let C24;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C50;
  let C48;
  let C47;
  const _bottom = dart.privateName(edge_insets, "_bottom");
  const _right = dart.privateName(edge_insets, "_right");
  const _top = dart.privateName(edge_insets, "_top");
  const _left = dart.privateName(edge_insets, "_left");
  let C51;
  let C54;
  let C55;
  let C53;
  let C52;
  let C58;
  let C57;
  let C56;
  const _buildLargeScreen = dart.privateName(home, "_buildLargeScreen");
  const _buildMediumScreen = dart.privateName(home, "_buildMediumScreen");
  const _buildSmallScreen = dart.privateName(home, "_buildSmallScreen");
  let C61;
  let C62;
  let C63;
  let C60;
  let C59;
  let C66;
  let C67;
  let C65;
  let C64;
  let C70;
  let C69;
  let C68;
  const _buildContent = dart.privateName(home, "_buildContent");
  let C73;
  let C74;
  let C72;
  let C71;
  const _buildIllustration = dart.privateName(home, "_buildIllustration");
  let C77;
  let C78;
  let C76;
  let C75;
  let C81;
  let C80;
  let C79;
  const _buildFooter = dart.privateName(home, "_buildFooter");
  let C84;
  let C85;
  let C86;
  let C83;
  let C82;
  let C89;
  let C88;
  let C87;
  let C92;
  let C93;
  let C91;
  let C90;
  let C96;
  let C97;
  let C95;
  let C94;
  let C100;
  let C99;
  let C98;
  let C103;
  let C104;
  let C105;
  let C102;
  let C101;
  let C108;
  let C107;
  let C106;
  let C111;
  let C112;
  let C110;
  let C109;
  let C114;
  let C113;
  const _buildCopyRightText = dart.privateName(home, "_buildCopyRightText");
  let C117;
  let C116;
  let C115;
  const _buildSocialIcons = dart.privateName(home, "_buildSocialIcons");
  let C120;
  let C119;
  let C118;
  let C123;
  let C124;
  let C122;
  let C121;
  let C127;
  let C126;
  let C125;
  let C130;
  let C131;
  let C129;
  let C128;
  let C134;
  let C133;
  let C132;
  const _buildAboutMe = dart.privateName(home, "_buildAboutMe");
  let C137;
  let C136;
  let C135;
  const _buildHeadline = dart.privateName(home, "_buildHeadline");
  let C140;
  let C139;
  let C138;
  const _buildSummary = dart.privateName(home, "_buildSummary");
  let C143;
  let C142;
  let C141;
  const _buildEducation = dart.privateName(home, "_buildEducation");
  let C146;
  let C145;
  let C144;
  const _buildSkills = dart.privateName(home, "_buildSkills");
  let C149;
  let C150;
  let C151;
  let C148;
  let C147;
  const _buildSkillsAndEducation = dart.privateName(home, "_buildSkillsAndEducation");
  let C154;
  let C155;
  let C156;
  let C157;
  let C153;
  let C152;
  let C160;
  let C159;
  let C158;
  let C163;
  let C164;
  let C162;
  let C161;
  let C167;
  let C168;
  let C166;
  let C165;
  let C171;
  let C172;
  let C170;
  let C169;
  let C175;
  let C176;
  let C174;
  let C173;
  let C179;
  let C178;
  let C177;
  let C182;
  let C183;
  let C181;
  let C180;
  let C186;
  let C187;
  let C185;
  let C184;
  const _buildSkillChip = dart.privateName(home, "_buildSkillChip");
  let C190;
  let C191;
  let C189;
  let C188;
  const _buildSkillsContainerHeading = dart.privateName(home, "_buildSkillsContainerHeading");
  let C194;
  let C193;
  let C192;
  let C197;
  let C198;
  let C199;
  let C196;
  let C195;
  let C202;
  let C203;
  let C201;
  let C200;
  let C206;
  let C207;
  let C205;
  let C204;
  let C210;
  let C209;
  let C208;
  let C213;
  let C212;
  let C211;
  const _buildEducationTimeline = dart.privateName(home, "_buildEducationTimeline");
  let C216;
  let C217;
  let C215;
  let C214;
  const _buildEducationTile = dart.privateName(home, "_buildEducationTile");
  let C220;
  let C219;
  let C218;
  let C223;
  let C224;
  let C222;
  let C221;
  let C227;
  let C228;
  let C226;
  let C225;
  let C231;
  let C232;
  let C230;
  let C229;
  let C235;
  let C236;
  let C234;
  let C233;
  let C239;
  let C240;
  let C238;
  let C237;
  let C241;
  let C244;
  let C245;
  let C243;
  let C242;
  let C248;
  let C249;
  let C247;
  let C246;
  let C252;
  let C253;
  let C254;
  let C251;
  let C250;
  let C257;
  let C258;
  let C256;
  let C255;
  let C261;
  let C260;
  let C259;
  let C264;
  let C265;
  let C263;
  let C262;
  let C268;
  let C269;
  let C270;
  let C271;
  let C267;
  let C266;
  let C274;
  let C275;
  let C273;
  let C272;
  let C278;
  let C277;
  let C276;
  let C281;
  let C282;
  let C283;
  let C284;
  let C280;
  let C279;
  let C287;
  let C288;
  let C286;
  let C285;
  let C291;
  let C292;
  let C293;
  let C290;
  let C289;
  home.HomePage = class HomePage extends framework.StatelessWidget {
    get skills() {
      return this[skills];
    }
    set skills(value) {
      super.skills = value;
    }
    get educationList() {
      return this[educationList];
    }
    set educationList(value) {
      super.educationList = value;
    }
    build(context) {
      return new material.Material.new({color: new ui.Color.new(4294441210), child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: core.double._check(screen_utils.ScreenUtil.getInstance().setWidth(108.0))}), child: new scaffold.Scaffold.new({backgroundColor: colors.Colors.transparent, appBar: preferred_size.PreferredSizeWidget._check(this[_buildAppBar](context)), drawer: this[_buildDrawer](context), body: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => this[_buildBody](context, constraints), BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
    }
    [_buildAppBar](context) {
      return new app_bar.AppBar.new({titleSpacing: 0.0, title: this[_buildTitle](), backgroundColor: colors.Colors.transparent, elevation: 0.0, actions: !dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? this[_buildActions]() : null, $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
    [_buildTitle]() {
      return new basic.RichText.new({text: new text_span.TextSpan.new({style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.black}), children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "Wem", style: text_styles.TextStyles.logo}), new text_span.TextSpan.new({text: " Developer", style: text_styles.TextStyles.logo.copyWith({color: new ui.Color.new(4283477952)})})])}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
    [_buildActions]() {
      return JSArrayOfWidget().of([new material_button.MaterialButton.new({child: new text.Text.new("Home", {style: text_styles.TextStyles.menu_item.copyWith({color: new ui.Color.new(4283477952)}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), onPressed: dart.fn(() => {
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new material_button.MaterialButton.new({child: new text.Text.new("About", {style: text_styles.TextStyles.menu_item, $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), onPressed: dart.fn(() => {
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), new material_button.MaterialButton.new({child: new text.Text.new("Contact", {style: text_styles.TextStyles.menu_item, $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), onPressed: dart.fn(() => {
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C47 || CT.C47})]);
    }
    [_buildDrawer](context) {
      return dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? new drawer.Drawer.new({child: new scroll_view.ListView.new({padding: C51 || CT.C51, children: this[_buildActions](), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}) : null;
    }
    [_buildBody](context, constraints) {
      return new single_child_scroll_view.SingleChildScrollView.new({child: new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.new({minWidth: constraints.maxWidth, minHeight: constraints.maxHeight}), child: new responsive_widget.ResponsiveWidget.new({largeScreen: this[_buildLargeScreen](context), mediumScreen: this[_buildMediumScreen](context), smallScreen: this[_buildSmallScreen](context), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68});
    }
    [_buildLargeScreen](context) {
      return new basic.IntrinsicHeight.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, children: JSArrayOfWidget().of([new basic.Expanded.new({flex: 1, child: this[_buildContent](context), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), this[_buildIllustration]()]), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), this[_buildFooter](context)]), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87});
    }
    [_buildMediumScreen](context) {
      return new basic.IntrinsicHeight.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, children: JSArrayOfWidget().of([new basic.Expanded.new({flex: 1, child: this[_buildContent](context), $creationLocationd_0dea112b090073317d4: C90 || CT.C90})]), $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), this[_buildFooter](context)]), $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), $creationLocationd_0dea112b090073317d4: C106 || CT.C106});
    }
    [_buildSmallScreen](context) {
      return new basic.IntrinsicHeight.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new basic.Expanded.new({flex: 1, child: this[_buildContent](context), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C113 || CT.C113}), this[_buildCopyRightText](context), new basic.SizedBox.new({height: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 12.0 : 0.0, $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), this[_buildSocialIcons](), new basic.SizedBox.new({height: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 12.0 : 0.0, $creationLocationd_0dea112b090073317d4: C118 || CT.C118})]), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125});
    }
    [_buildIllustration]() {
      return new image.Image.network("assets/images/programmer-3.gif", {height: core.double._check(screen_utils.ScreenUtil.getInstance().setWidth(345.0)), $creationLocationd_0dea112b090073317d4: C128 || CT.C128});
    }
    [_buildContent](context) {
      return new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 24.0 : 0.0, $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), this[_buildAboutMe](context), new basic.SizedBox.new({height: 4.0, $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), this[_buildHeadline](context), new basic.SizedBox.new({height: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 12.0 : 24.0, $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), this[_buildSummary](), new basic.SizedBox.new({height: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 24.0 : 48.0, $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([this[_buildEducation](), new basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: C144 || CT.C144}), this[_buildSkills](context)]), $creationLocationd_0dea112b090073317d4: C147 || CT.C147}) : this[_buildSkillsAndEducation](context)]), $creationLocationd_0dea112b090073317d4: C152 || CT.C152});
    }
    [_buildAboutMe](context) {
      return new basic.RichText.new({text: new text_span.TextSpan.new({style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.black}), children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "About", style: text_styles.TextStyles.heading.copyWith({fontFamily: "NexaLight", fontSize: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 36.0 : 45.0})}), new text_span.TextSpan.new({text: " Me", style: text_styles.TextStyles.heading.copyWith({color: new ui.Color.new(4283477952), fontSize: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 36.0 : 45.0})})])}), $creationLocationd_0dea112b090073317d4: C158 || CT.C158});
    }
    [_buildHeadline](context) {
      return new text.Text.new(dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? strings.Strings.headline : strings.Strings.headline[$replaceFirst](core.RegExp.new(" f"), "\nf"), {style: text_styles.TextStyles.sub_heading, $creationLocationd_0dea112b090073317d4: C161 || CT.C161});
    }
    [_buildSummary]() {
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 80.0}), child: new text.Text.new(strings.Strings.summary, {style: text_styles.TextStyles.body, $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), $creationLocationd_0dea112b090073317d4: C169 || CT.C169});
    }
    [_buildSkillsAndEducation](context) {
      return new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Expanded.new({flex: 1, child: this[_buildEducation](), $creationLocationd_0dea112b090073317d4: C173 || CT.C173}), new basic.SizedBox.new({width: 40.0, $creationLocationd_0dea112b090073317d4: C177 || CT.C177}), new basic.Expanded.new({flex: 1, child: this[_buildSkills](context), $creationLocationd_0dea112b090073317d4: C180 || CT.C180})]), $creationLocationd_0dea112b090073317d4: C184 || CT.C184});
    }
    [_buildSkills](context) {
      let widgets = this.skills[$map](basic.Padding, dart.fn(skill => new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 8.0}), child: this[_buildSkillChip](context, skill), $creationLocationd_0dea112b090073317d4: C188 || CT.C188}), StringToPadding()))[$toList]();
      return new basic.Column.new({mainAxisSize: flex.MainAxisSize.max, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([this[_buildSkillsContainerHeading](), new basic.Wrap.new({children: widgets, $creationLocationd_0dea112b090073317d4: C192 || CT.C192})]), $creationLocationd_0dea112b090073317d4: C195 || CT.C195});
    }
    [_buildSkillsContainerHeading]() {
      return new text.Text.new("What Skill I Have", {style: text_styles.TextStyles.sub_heading, $creationLocationd_0dea112b090073317d4: C200 || CT.C200});
    }
    [_buildSkillChip](context, label) {
      return new chip.Chip.new({label: new text.Text.new(label, {style: text_styles.TextStyles.chip.copyWith({fontSize: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 10.0 : 11.0}), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}), $creationLocationd_0dea112b090073317d4: C208 || CT.C208});
    }
    [_buildEducation]() {
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: C211 || CT.C211}), this[_buildEducationTimeline]()]), $creationLocationd_0dea112b090073317d4: C214 || CT.C214});
    }
    [_buildEducationTimeline]() {
      let widgets = this.educationList[$map](framework.Widget, dart.fn(education => this[_buildEducationTile](education), EducationToWidget()))[$toList]();
      return new basic.Column.new({children: widgets, $creationLocationd_0dea112b090073317d4: C218 || CT.C218});
    }
    [_buildEducationTile](education) {
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 8.0}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new text.Text.new(dart.str(education.post), {style: text_styles.TextStyles.company, $creationLocationd_0dea112b090073317d4: C221 || CT.C221}), new text.Text.new(dart.str(education.organization), {style: text_styles.TextStyles.body.copyWith({color: new ui.Color.new(4282728539)}), $creationLocationd_0dea112b090073317d4: C225 || CT.C225}), new text.Text.new(dart.str(education.from) + "-" + dart.str(education.to), {style: text_styles.TextStyles.body, $creationLocationd_0dea112b090073317d4: C229 || CT.C229})]), $creationLocationd_0dea112b090073317d4: C233 || CT.C233}), $creationLocationd_0dea112b090073317d4: C237 || CT.C237});
    }
    [_buildFooter](context) {
      return new basic.Column.new({children: JSArrayOfWidget().of([new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C241 || CT.C241}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(12.0), child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new basic.Align.new({child: this[_buildCopyRightText](context), alignment: alignment.Alignment.centerLeft, $creationLocationd_0dea112b090073317d4: C242 || CT.C242}), new basic.Align.new({child: this[_buildSocialIcons](), alignment: alignment.Alignment.centerRight, $creationLocationd_0dea112b090073317d4: C246 || CT.C246})]), $creationLocationd_0dea112b090073317d4: C250 || CT.C250}), $creationLocationd_0dea112b090073317d4: C255 || CT.C255})]), $creationLocationd_0dea112b090073317d4: C259 || CT.C259});
    }
    [_buildCopyRightText](context) {
      return new text.Text.new(strings.Strings.rights_reserved, {style: text_styles.TextStyles.body1.copyWith({fontSize: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 8.0 : 10.0}), $creationLocationd_0dea112b090073317d4: C262 || CT.C262});
    }
    [_buildSocialIcons]() {
      return new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
              html.window[$open]("https://www.linkedin.com/in/huynh-dung-128962198", "LinkedIn");
            }, VoidToNull()), child: new image.Image.network("assets/icons/ic_linkedIn.png", {color: new ui.Color.new(4282728539), height: 20.0, width: 20.0, $creationLocationd_0dea112b090073317d4: C266 || CT.C266}), $creationLocationd_0dea112b090073317d4: C272 || CT.C272}), new basic.SizedBox.new({width: 16.0, $creationLocationd_0dea112b090073317d4: C276 || CT.C276}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
              html.window[$open]("https:github.com/devswift2017", "Github");
            }, VoidToNull()), child: new image.Image.network("assets/icons/ic_google.png", {color: new ui.Color.new(4282728539), height: 20.0, width: 20.0, $creationLocationd_0dea112b090073317d4: C279 || CT.C279}), $creationLocationd_0dea112b090073317d4: C285 || CT.C285})]), $creationLocationd_0dea112b090073317d4: C289 || CT.C289});
    }
  };
  (home.HomePage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[skills] = JSArrayOfString().of(["PHP", "Codeignter", "AngularJS", "ReactJS", "React Native", "NodeJS", "iOS", "Dart", "Flutter", "MySQL", "SQLite"]);
    this[educationList] = JSArrayOfEducation().of([new education.Education.new("2012", "2017", "University of Information Technology (UIT)", "Education"), new education.Education.new("September 2017", "Present", "Hanbiro Inc", "Software Engineer")]);
    home.HomePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.HomePage.prototype;
  dart.addTypeTests(home.HomePage);
  const skills = Symbol("HomePage.skills");
  const educationList = Symbol("HomePage.educationList");
  dart.setMethodSignature(home.HomePage, () => ({
    __proto__: dart.getMethods(home.HomePage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildAppBar]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildTitle]: dart.fnType(framework.Widget, []),
    [_buildActions]: dart.fnType(core.List$(framework.Widget), []),
    [_buildDrawer]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildBody]: dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints]),
    [_buildLargeScreen]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildMediumScreen]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildSmallScreen]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildIllustration]: dart.fnType(framework.Widget, []),
    [_buildContent]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildAboutMe]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildHeadline]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildSummary]: dart.fnType(framework.Widget, []),
    [_buildSkillsAndEducation]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildSkills]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildSkillsContainerHeading]: dart.fnType(framework.Widget, []),
    [_buildSkillChip]: dart.fnType(framework.Widget, [framework.BuildContext, core.String]),
    [_buildEducation]: dart.fnType(framework.Widget, []),
    [_buildEducationTimeline]: dart.fnType(framework.Widget, []),
    [_buildEducationTile]: dart.fnType(framework.Widget, [education.Education]),
    [_buildFooter]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildCopyRightText]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildSocialIcons]: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(home.HomePage, "package:devswift2017/ui/home.dart");
  dart.setFieldSignature(home.HomePage, () => ({
    __proto__: dart.getFields(home.HomePage.__proto__),
    skills: dart.finalFieldType(core.List$(core.String)),
    educationList: dart.finalFieldType(core.List$(education.Education))
  }));
  dart.trackLibraries("packages/devswift2017/ui/home", {
    "package:devswift2017/ui/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmRQ;;;;;;IAkDA;;;;;;UAzToB;AACxB,YAAO,mCACE,iBAAM,oBACN,gCACe,qEACM,AAAc,+CAAS,kBAE1C,4CACmB,6EAChB,mBAAa,OAAO,YACpB,mBAAa,OAAO,SACtB,+CAAuB,SAAC,SAAS,gBAC9B,iBAAW,OAAO,EAAE,WAAW;IAKhD;mBAEiC;AAC/B,YAAO,uCACS,YACP,sCACiB,sCACb,cAEP,WAAkB,iDAAc,OAAO,KAAI,wBAAkB;IAErE;;AAGE,YAAO,+BACC,mCACG,wCACK,aACI,iCAEI,wBAClB,gDAEoB,+BAEpB,uDAEoB,AAAK,6CACd,iBAAM;IAMzB;;AAGE,YAAe,uBACb,+CACS,kCAEa,AAAU,kDACnB,iBAAM,mFAGN;qFAEb,+CACS,mCAEa,sGAET;qFAEb,+CACS,qCAEa,sGAET;;IAGjB;mBAEiC;AAC/B,uBAAwB,iDAAc,OAAO,KACvC,8BACS,gEAEK,0IAGd;IACR;iBAE+B,SAAwB;AACrD,YAAO,gEACE,2CACQ,sCACC,AAAY,WAAD,sBAAsB,AAAY,WAAD,qBACnD,yDACQ,wBAAkB,OAAO,iBACxB,yBAAmB,OAAO,gBAC3B,wBAAkB,OAAO;IAI9C;wBAEsC;AACpC,YAAO,uCACE,oCACsB,0CACU,wCACnB,sBAChB,+BACS,iCACsB,iCACT,sBAChB,8BAAe,UAAU,oBAAc,OAAO,4DAC9C,gJAIN,mBAAa,OAAO;IAI5B;yBAEuC;AACrC,YAAO,uCACE,oCACsB,0CACU,wCACnB,sBAChB,+BACS,iCACsB,iCACT,sBAChB,8BAAe,UAAU,oBAAc,OAAO,gLAIpD,mBAAa,OAAO;IAI5B;wBAEsC;AACpC,YAAO,uCACE,oCACsB,iCACT,sBAChB,8BAAe,UAAU,oBAAc,OAAO,8DAC9C,oFACA,0BAAoB,OAAO,GAC3B,0CAC6B,iDAAc,OAAO,KAAI,OAAO,gEAC7D,2BACA,0CAC6B,iDAAc,OAAO,KAAI,OAAO;IAIrE;;AAGE,YAAa,uFAEQ,AAAc,+CAAS;IAE9C;oBAEkC;AAChC,YAAO,qCACsB,0CACU,mDACE,yCACrB,sBAChB,0CAAkC,iDAAc,OAAO,KAAI,OAAO,gEAClE,oBAAc,OAAO,GACrB,gCAAiB,gEACjB,qBAAe,OAAO,GACtB,0CAAkC,iDAAc,OAAO,KAAI,OAAO,iEAClE,uBACA,0CAAkC,iDAAc,OAAO,KAAI,OAAO,2EACjD,iDAAc,OAAO,KAChC,oCAC6B,2CACY,yCACrB,sBAChB,yBACA,gCAAiB,iEACjB,mBAAa,OAAO,iEAGxB,+BAAyB,OAAO;IAG5C;oBAEkC;AAChC,YAAO,+BACC,mCACG,wCACK,aACI,iCAEI,wBAClB,kDAEoB,AAAQ,sFAEG,iDAAc,OAAO,KAAI,OAAK,UAG7D,gDAEoB,AAAQ,gDACjB,iBAAM,iCACc,iDAAc,OAAO,KAAI,OAAK;IAMrE;qBAEmC;AACjC,YAAO,6BACY,iDAAc,OAAO,KACxB,2BACA,AAAS,wCAAa,gBAAO,OAAQ,gBACjC;IAEtB;;AAGE,YAAO,iCACe,wCAAY,eACzB,kBACG,iCACU;IAGxB;+BAE6C;AAC3C,YAAO,wCACkC,yCACrB,sBAChB,8BACQ,UACC,oFAET,+BAAgB,iEAChB,8BACQ,UACC,mBAAa,OAAO;IAInC;mBAgBiC;AACZ,oBAAU,AACxB,AAIA,iCAJI,QAAC,SAAU,gCACU,wCAAY,cACzB,sBAAgB,OAAO,EAAE,KAAK;AAI/C,YAAO,qCACsB,2CACY,yCACrB,sBAChB,sCACA,8BAAe,OAAO;IAG5B;;AAGE,YAAO,gDAEa;IAEtB;sBAEoC,SAAgB;AAClD,YAAO,2BACE,kBACL,KAAK,UACa,AAAK,0DACM,iDAAc,OAAO,KAAI,OAAO;IAInE;;AAkBE,YAAO,2CACkC,yCACrB,sBAChB,gCAAiB,gEACjB;IAGN;;AAGqB,oBAAU,AACxB,AACA,2CADI,QAAC,aAAc,0BAAoB,SAAS;AAErD,YAAO,iCAAiB,OAAO;IACjC;0BAEqC;AACnC,YAAO,iCACe,gDAAoB,cACjC,0CACkC,2CACrB,sBAChB,kBACqB,SAAhB,AAAU,SAAD,gBACM,2FAEpB,kBAC6B,SAAxB,AAAU,SAAD,wBACM,AAAK,6CACd,iBAAM,0EAGjB,kBACqC,SAAhC,AAAU,SAAD,SAAM,eAAG,AAAU,SAAD,cACZ;IAK5B;mBAEiC;AAC/B,YAAO,iCACa,sBAChB,oFACA,gCACsB,+BAAI,cACjB,iCACsB,0CACU,+CACnB,sBAChB,4BACS,0BAAoB,OAAO,cACb,2FAEvB,4BACS,sCACc;IAOnC;0BAEwC;AACtC,YAAO,mBACG,yCACU,AAAM,2DACK,iDAAc,OAAO,KAAI,MAAI;IAG9D;;AAGE,YAAO,kCACsB,0CACU,yCACnB,sBAChB,iDACS;cACA,AAAO,mBACR,oDAAoD;qCAE7C,gEAEJ,iBAAM,qBACL,aACD,4HAGX,+BAAgB,iEAChB,iDACS;cACA,AAAO,mBAAK,iCAAiC;qCAEvC,8DAEJ,iBAAM,qBACL,aACD;IAKjB;;;;IA5KM,eAAS,sBACb,OACA,cACA,aACA,WACA,gBACA,UACA,OACA,QACA,WACA,SACA;IAuCI,sBAAgB,yBACpB,4BACE,QACA,QACA,8CACA,cAEF,4BACE,kBACA,WACA,eACA;;;EAgHN","file":"home.ddc.js"}');
  // Exports:
  return {
    ui__home: home
  };
});

//# sourceMappingURL=home.ddc.js.map
