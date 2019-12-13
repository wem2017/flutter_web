define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const screen_utils = Object.create(dart.library);
  const CT = Object.create(null);
  screen_utils.ScreenUtil = class ScreenUtil extends core.Object {
    get width() {
      return this[width$];
    }
    set width(value) {
      this[width$] = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      this[height$] = value;
    }
    get allowFontScaling() {
      return this[allowFontScaling$];
    }
    set allowFontScaling(value) {
      this[allowFontScaling$] = value;
    }
    static getInstance() {
      return screen_utils.ScreenUtil.instance;
    }
    init(context) {
      let mediaQuery = media_query.MediaQuery.of(context);
      screen_utils.ScreenUtil._mediaQueryData = mediaQuery;
      screen_utils.ScreenUtil._pixelRatio = mediaQuery.devicePixelRatio;
      screen_utils.ScreenUtil._screenWidth = mediaQuery.size.width;
      screen_utils.ScreenUtil._screenHeight = mediaQuery.size.height;
      screen_utils.ScreenUtil._statusBarHeight = mediaQuery.padding.top;
      screen_utils.ScreenUtil._bottomBarHeight = screen_utils.ScreenUtil._mediaQueryData.padding.bottom;
      screen_utils.ScreenUtil._textScaleFactor = mediaQuery.textScaleFactor;
    }
    static get mediaQueryData() {
      return screen_utils.ScreenUtil._mediaQueryData;
    }
    static get textScaleFactory() {
      return screen_utils.ScreenUtil._textScaleFactor;
    }
    static get pixelRatio() {
      return screen_utils.ScreenUtil._pixelRatio;
    }
    static get screenWidthDp() {
      return screen_utils.ScreenUtil._screenWidth;
    }
    static get screenHeightDp() {
      return screen_utils.ScreenUtil._screenHeight;
    }
    static get screenWidth() {
      return dart.notNull(screen_utils.ScreenUtil._screenWidth) * dart.notNull(screen_utils.ScreenUtil._pixelRatio);
    }
    static get screenHeight() {
      return dart.notNull(screen_utils.ScreenUtil._screenHeight) * dart.notNull(screen_utils.ScreenUtil._pixelRatio);
    }
    static get statusBarHeight() {
      return screen_utils.ScreenUtil._statusBarHeight;
    }
    static get bottomBarHeight() {
      return screen_utils.ScreenUtil._bottomBarHeight;
    }
    get scaleWidth() {
      return dart.notNull(screen_utils.ScreenUtil._screenWidth) / dart.notNull(screen_utils.ScreenUtil.instance.width);
    }
    get scaleHeight() {
      return dart.notNull(screen_utils.ScreenUtil._screenHeight) / dart.notNull(screen_utils.ScreenUtil.instance.height);
    }
    setWidth(width) {
      return dart.notNull(width) * dart.notNull(core.num._check(this.scaleWidth));
    }
    setHeight(height) {
      return dart.notNull(height) * dart.notNull(core.num._check(this.scaleHeight));
    }
    setSp(fontSize) {
      return dart.test(this.allowFontScaling) ? this.setWidth(fontSize) : dart.dsend(this.setWidth(fontSize), '/', [screen_utils.ScreenUtil._textScaleFactor]);
    }
  };
  (screen_utils.ScreenUtil.new = function(opts) {
    let width = opts && 'width' in opts ? opts.width : 1080;
    let height = opts && 'height' in opts ? opts.height : 1920;
    let allowFontScaling = opts && 'allowFontScaling' in opts ? opts.allowFontScaling : false;
    this[width$] = width;
    this[height$] = height;
    this[allowFontScaling$] = allowFontScaling;
    ;
  }).prototype = screen_utils.ScreenUtil.prototype;
  dart.addTypeTests(screen_utils.ScreenUtil);
  const width$ = Symbol("ScreenUtil.width");
  const height$ = Symbol("ScreenUtil.height");
  const allowFontScaling$ = Symbol("ScreenUtil.allowFontScaling");
  dart.setMethodSignature(screen_utils.ScreenUtil, () => ({
    __proto__: dart.getMethods(screen_utils.ScreenUtil.__proto__),
    init: dart.fnType(dart.void, [framework.BuildContext]),
    setWidth: dart.fnType(dart.dynamic, [core.double]),
    setHeight: dart.fnType(dart.dynamic, [core.double]),
    setSp: dart.fnType(dart.dynamic, [core.double])
  }));
  dart.setGetterSignature(screen_utils.ScreenUtil, () => ({
    __proto__: dart.getGetters(screen_utils.ScreenUtil.__proto__),
    scaleWidth: dart.dynamic,
    scaleHeight: dart.dynamic
  }));
  dart.setLibraryUri(screen_utils.ScreenUtil, "package:devswift2017/utils/screen/screen_utils.dart");
  dart.setFieldSignature(screen_utils.ScreenUtil, () => ({
    __proto__: dart.getFields(screen_utils.ScreenUtil.__proto__),
    width: dart.fieldType(core.double),
    height: dart.fieldType(core.double),
    allowFontScaling: dart.fieldType(core.bool)
  }));
  dart.defineLazy(screen_utils.ScreenUtil, {
    /*screen_utils.ScreenUtil.instance*/get instance() {
      return new screen_utils.ScreenUtil.new();
    },
    set instance(_) {},
    /*screen_utils.ScreenUtil._mediaQueryData*/get _mediaQueryData() {
      return null;
    },
    set _mediaQueryData(_) {},
    /*screen_utils.ScreenUtil._screenWidth*/get _screenWidth() {
      return null;
    },
    set _screenWidth(_) {},
    /*screen_utils.ScreenUtil._screenHeight*/get _screenHeight() {
      return null;
    },
    set _screenHeight(_) {},
    /*screen_utils.ScreenUtil._pixelRatio*/get _pixelRatio() {
      return null;
    },
    set _pixelRatio(_) {},
    /*screen_utils.ScreenUtil._statusBarHeight*/get _statusBarHeight() {
      return null;
    },
    set _statusBarHeight(_) {},
    /*screen_utils.ScreenUtil._bottomBarHeight*/get _bottomBarHeight() {
      return null;
    },
    set _bottomBarHeight(_) {},
    /*screen_utils.ScreenUtil._textScaleFactor*/get _textScaleFactor() {
      return null;
    },
    set _textScaleFactor(_) {}
  });
  dart.trackLibraries("packages/devswift2017/utils/screen/screen_utils", {
    "package:devswift2017/utils/screen/screen_utils.dart": screen_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["screen_utils.dart"],"names":[],"mappings":";;;;;;;;;;IAMS;;;;;;IACA;;;;;;IACF;;;;;;;AAmBH,YAAO;IACT;SAEuB;AACN,uBAAwB,0BAAG,OAAO;MACjD,0CAAkB,UAAU;MAC5B,sCAAc,AAAW,UAAD;MACxB,uCAAe,AAAW,AAAK,UAAN;MACzB,wCAAgB,AAAW,AAAK,UAAN;MAC1B,2CAAmB,AAAW,AAAQ,UAAT;MAC7B,2CAAmB,AAAgB,AAAQ;MAC3C,2CAAmB,AAAW,UAAD;IAC/B;;AAE4C;IAAe;;AAErB;IAAgB;;AAEtB;IAAW;;AAER;IAAY;;AAEX;IAAa;;AAEhB,YAAa,cAAb,qDAAe;IAAW;;AAEzB,YAAc,cAAd,sDAAgB;IAAW;;AAExB;IAAgB;;AAEhB;IAAgB;;AAEnC,YAAa,cAAb,qDAAe,AAAS;IAAK;;AAE5B,YAAc,cAAd,sDAAgB,AAAS;IAAM;aAElC;AAAU,YAAM,cAAN,KAAK,iCAAG;IAAU;cAE3B;AAAW,YAAO,cAAP,MAAM,iCAAG;IAAW;UAEnC;AAAa,gDACpB,cAAS,QAAQ,IACE,WAAnB,cAAS,QAAQ,SAAI;IAAgB;;;QAhDpC;QACA;QACA;IAFA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;;;;MApBgB,gCAAQ;YAAO;;;MAMX,uCAAe;;;;MACvB,oCAAY;;;;MACZ,qCAAa;;;;MACb,mCAAW;;;;MACX,wCAAgB;;;;MAEhB,wCAAgB;;;;MAEhB,wCAAgB","file":"screen_utils.ddc.js"}');
  // Exports:
  return {
    utils__screen__screen_utils: screen_utils
  };
});

//# sourceMappingURL=screen_utils.ddc.js.map
