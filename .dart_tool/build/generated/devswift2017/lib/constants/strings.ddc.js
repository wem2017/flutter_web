define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const strings = Object.create(dart.library);
  const CT = Object.create(null);
  strings.Strings = class Strings extends core.Object {};
  (strings.Strings.__ = function() {
    ;
  }).prototype = strings.Strings.prototype;
  dart.addTypeTests(strings.Strings);
  dart.setLibraryUri(strings.Strings, "package:devswift2017/constants/strings.dart");
  dart.defineLazy(strings.Strings, {
    /*strings.Strings.about_me*/get about_me() {
      return "About Me";
    },
    /*strings.Strings.about*/get about() {
      return "About";
    },
    /*strings.Strings.me*/get me() {
      return " Me";
    },
    /*strings.Strings.title*/get title() {
      return "Wem";
    },
    /*strings.Strings.subtitle*/get subtitle() {
      return " Developer";
    },
    /*strings.Strings.headline*/get headline() {
      return "I'm Huynh Dung, FullStack Developer from Ho Chi Minh City, VietNam";
    },
    /*strings.Strings.summary*/get summary() {
      return "Mobile developer with 2 years 2 months experience. I work with React Native, Flutter and iOS (include UI, UX, template, codebase, network communication, thread, socket, database client...), can build a server with common functions to communicate between backend and client} Learn new languages or platforms quickly with a positive attitude. Can join in all process of product development from initialize to store release";
    },
    /*strings.Strings.experience*/get experience() {
      return "Experience";
    },
    /*strings.Strings.skills_i_have*/get skills_i_have() {
      return "What Skill I Have";
    },
    /*strings.Strings.rights_reserved*/get rights_reserved() {
      return "© 2019 IOTECK SOLUTIONS. ALL RIGHTS RESERVED.";
    },
    /*strings.Strings.menu_home*/get menu_home() {
      return "Home";
    },
    /*strings.Strings.menu_about*/get menu_about() {
      return "About";
    },
    /*strings.Strings.menu_contact*/get menu_contact() {
      return "Contact";
    }
  });
  dart.trackLibraries("packages/devswift2017/constants/strings", {
    "package:devswift2017/constants/strings.dart": strings
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["strings.dart"],"names":[],"mappings":";;;;;;;;;;EACa;;;;MACS,wBAAQ;;;MACR,qBAAK;;;MACL,kBAAE;;;MACF,qBAAK;;;MACL,wBAAQ;;;MACR,wBAAQ;;;MACR,uBAAO;;;MACP,0BAAU;;;MACV,6BAAa;;;MACb,+BAAe;;;MAEf,yBAAS;;;MACT,0BAAU;;;MACV,4BAAY","file":"strings.ddc.js"}');
  // Exports:
  return {
    constants__strings: strings
  };
});

//# sourceMappingURL=strings.ddc.js.map
