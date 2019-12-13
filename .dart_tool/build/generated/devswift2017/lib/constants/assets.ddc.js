define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assets = Object.create(dart.library);
  const CT = Object.create(null);
  assets.Assets = class Assets extends core.Object {};
  (assets.Assets.__ = function() {
    ;
  }).prototype = assets.Assets.prototype;
  dart.addTypeTests(assets.Assets);
  dart.setLibraryUri(assets.Assets, "package:devswift2017/constants/assets.dart");
  dart.defineLazy(assets.Assets, {
    /*assets.Assets.programmer3*/get programmer3() {
      return "assets/images/programmer-3.gif";
    },
    /*assets.Assets.dribble*/get dribble() {
      return "assets/icons/ic_dribbble.png";
    },
    /*assets.Assets.evernote*/get evernote() {
      return "assets/icons/ic_evernote.png";
    },
    /*assets.Assets.google*/get google() {
      return "assets/icons/ic_google.png";
    },
    /*assets.Assets.twitter*/get twitter() {
      return "assets/icons/ic_twitter.png";
    },
    /*assets.Assets.linkedin*/get linkedin() {
      return "assets/icons/ic_linkedIn.png";
    }
  });
  dart.trackLibraries("packages/devswift2017/constants/assets", {
    "package:devswift2017/constants/assets.dart": assets
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["assets.dart"],"names":[],"mappings":";;;;;;;;;;EACY;;;;MACU,yBAAW;;;MACX,qBAAO;;;MACP,sBAAQ;;;MACR,oBAAM;;;MACN,qBAAO;;;MACP,sBAAQ","file":"assets.ddc.js"}');
  // Exports:
  return {
    constants__assets: assets
  };
});

//# sourceMappingURL=assets.ddc.js.map
