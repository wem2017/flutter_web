define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const ui = packages__flutter_web_ui__ui.ui;
  const text_styles = Object.create(dart.library);
  const CT = Object.create(null);
  text_styles.TextStyles = class TextStyles extends core.Object {
    static get logo() {
      return new text_style.TextStyle.new({fontFamily: "ProductSans", color: new ui.Color.new(4282728539), fontSize: 22.0, fontWeight: ui.FontWeight.bold, letterSpacing: 1.0});
    }
    static get menu_item() {
      return new text_style.TextStyle.new({fontFamily: "ProductSans", fontSize: 12.0, letterSpacing: 1.0, color: new ui.Color.new(4282728539)});
    }
    static get heading() {
      return new text_style.TextStyle.new({fontFamily: "NexaBold", color: new ui.Color.new(4282728539), fontSize: 45.0, fontWeight: ui.FontWeight.bold, letterSpacing: 1.0});
    }
    static get sub_heading() {
      return new text_style.TextStyle.new({color: new ui.Color.new(4282728539), fontFamily: "ProductSans", fontSize: 17.0, letterSpacing: 1.2});
    }
    static get company() {
      return new text_style.TextStyle.new({fontFamily: "ProductSans", color: new ui.Color.new(4282728539), height: 1.5, fontSize: 15.0, letterSpacing: 1.0});
    }
    static get body() {
      return new text_style.TextStyle.new({fontFamily: "ProductSans", color: new ui.Color.new(4286939548), height: 1.5, fontSize: 12.0, letterSpacing: 1.0});
    }
    static get body1() {
      return new text_style.TextStyle.new({fontFamily: "ProductSans", color: new ui.Color.new(4286939548), height: 1.5, fontSize: 10.0, letterSpacing: 1.0});
    }
    static get chip() {
      return new text_style.TextStyle.new({fontFamily: "ProductSans", color: new ui.Color.new(4286939548), height: 1.5, fontSize: 12.0, letterSpacing: 1.0});
    }
  };
  (text_styles.TextStyles.__ = function() {
    ;
  }).prototype = text_styles.TextStyles.prototype;
  dart.addTypeTests(text_styles.TextStyles);
  dart.setLibraryUri(text_styles.TextStyles, "package:devswift2017/constants/text_styles.dart");
  dart.trackLibraries("packages/devswift2017/constants/text_styles", {
    "package:devswift2017/constants/text_styles.dart": text_styles
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_styles.dart"],"names":[],"mappings":";;;;;;;;;;;AAM+B,6EAEhB,iBAAM,uBACH,kBACa,mCACR;IAChB;;AAE6B,gFAElB,qBACK,YACR,iBAAM;IACd;;AAE2B,0EAEnB,iBAAM,uBACH,kBACa,mCACR;IAChB;;AAE+B,kDACvB,iBAAM,kDAEH,qBACK;IAChB;;AAE2B,6EAEvB,iBAAM,qBACL,eACE,qBACK;IAChB;;AAE4B,6EAEhB,iBAAM,qBACL,eACE,qBACK;IAChB;;AAEyB,6EAErB,iBAAM,qBACL,eACE,qBACK;IAChB;;AAE4B,6EAEpB,iBAAM,qBACL,eACE,qBACK;IAChB;;;;EA9Da","file":"text_styles.ddc.js"}');
  // Exports:
  return {
    constants__text_styles: text_styles
  };
});

//# sourceMappingURL=text_styles.ddc.js.map
