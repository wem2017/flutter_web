define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const fonts = Object.create(dart.library);
  const CT = Object.create(null);
  fonts.Fonts = class Fonts extends core.Object {};
  (fonts.Fonts.__ = function() {
    ;
  }).prototype = fonts.Fonts.prototype;
  dart.addTypeTests(fonts.Fonts);
  dart.setLibraryUri(fonts.Fonts, "package:devswift2017/constants/fonts.dart");
  dart.defineLazy(fonts.Fonts, {
    /*fonts.Fonts.product*/get product() {
      return "ProductSans";
    },
    /*fonts.Fonts.nexa_light*/get nexa_light() {
      return "NexaLight";
    },
    /*fonts.Fonts.nexa_bold*/get nexa_bold() {
      return "NexaBold";
    }
  });
  dart.trackLibraries("packages/devswift2017/constants/fonts", {
    "package:devswift2017/constants/fonts.dart": fonts
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fonts.dart"],"names":[],"mappings":";;;;;;;;;;EACW;;;;MACW,mBAAO;;;MACP,sBAAU;;;MACV,qBAAS","file":"fonts.ddc.js"}');
  // Exports:
  return {
    constants__fonts: fonts
  };
});

//# sourceMappingURL=fonts.ddc.js.map
