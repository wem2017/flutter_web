define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/devswift2017/utils/screen/screen_utils', 'packages/devswift2017/ui/home'], function(dart_sdk, packages__flutter_web__material, packages__flutter_web_ui__ui, packages__flutter_web__animation, packages__devswift2017__utils__screen__screen_utils, packages__devswift2017__ui__home) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter_web__material.src__material__app;
  const theme_data = packages__flutter_web__material.src__material__theme_data;
  const ui = packages__flutter_web_ui__ui.ui;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const binding = packages__flutter_web__animation.src__widgets__binding;
  const screen_utils = packages__devswift2017__utils__screen__screen_utils.utils__screen__screen_utils;
  const home = packages__devswift2017__ui__home.ui__home;
  const main = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 13,
        line: 19,
        file: "org-dartlang-app:///packages/devswift2017/main.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "debugShowCheckedModeBanner",
        column: 7,
        line: 13,
        file: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "theme",
        column: 7,
        line: 14,
        file: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "home",
        column: 7,
        line: 19,
        file: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C3 || CT.C3,
        name: null,
        column: 12,
        line: 12,
        file: "org-dartlang-app:///packages/devswift2017/main.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 12,
        line: 33,
        file: "org-dartlang-app:///packages/devswift2017/main.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 23,
        line: 6,
        file: "org-dartlang-app:///packages/devswift2017/main.dart"
      });
    }
  });
  let C1;
  let C0;
  let C4;
  let C5;
  let C6;
  let C3;
  let C2;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, theme: theme_data.ThemeData.new({brightness: ui.Brightness.light, primaryColorBrightness: ui.Brightness.light, accentColorBrightness: ui.Brightness.light}), home: new main.MyAppChild.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:devswift2017/main.dart");
  main.MyAppChild = class MyAppChild extends framework.StatefulWidget {
    createState() {
      return new main._MyAppChildState.new();
    }
  };
  (main.MyAppChild.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyAppChild.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyAppChild.prototype;
  dart.addTypeTests(main.MyAppChild);
  dart.setMethodSignature(main.MyAppChild, () => ({
    __proto__: dart.getMethods(main.MyAppChild.__proto__),
    createState: dart.fnType(main._MyAppChildState, [])
  }));
  dart.setLibraryUri(main.MyAppChild, "package:devswift2017/main.dart");
  let C7;
  main._MyAppChildState = class _MyAppChildState extends framework.State$(main.MyAppChild) {
    build(context) {
      let t0;
      screen_utils.ScreenUtil.instance = (t0 = screen_utils.ScreenUtil.getInstance(), t0.init(context), t0);
      return new home.HomePage.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
  };
  (main._MyAppChildState.new = function() {
    main._MyAppChildState.__proto__.new.call(this);
    ;
  }).prototype = main._MyAppChildState.prototype;
  dart.addTypeTests(main._MyAppChildState);
  dart.setMethodSignature(main._MyAppChildState, () => ({
    __proto__: dart.getMethods(main._MyAppChildState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyAppChildState, "package:devswift2017/main.dart");
  let C8;
  main.main = function main$() {
    return binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C8 || CT.C8}));
  };
  dart.trackLibraries("packages/devswift2017/main", {
    "package:devswift2017/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,sDACuB,cACrB,sCACoB,6CACY,4CACD,6BAEhC;IAEV;;;;;;EACF;;;;;;;;;AAIoC;IAAkB;;;;;;EACtD;;;;;;;;;UAI4B;;MACb,yCAAsB,uCAAe,QAAK,OAAO;AAC5D,YAAO;IACT;;;;;EACF;;;;;;;;;AA7Be,0BAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
