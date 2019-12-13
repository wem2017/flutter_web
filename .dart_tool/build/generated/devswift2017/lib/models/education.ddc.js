define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const education = Object.create(dart.library);
  const CT = Object.create(null);
  education.Education = class Education extends core.Object {
    get from() {
      return this[from$];
    }
    set from(value) {
      this[from$] = value;
    }
    get to() {
      return this[to$];
    }
    set to(value) {
      this[to$] = value;
    }
    get organization() {
      return this[organization$];
    }
    set organization(value) {
      this[organization$] = value;
    }
    get post() {
      return this[post$];
    }
    set post(value) {
      this[post$] = value;
    }
  };
  (education.Education.new = function(from, to, organization, post) {
    this[from$] = from;
    this[to$] = to;
    this[organization$] = organization;
    this[post$] = post;
    ;
  }).prototype = education.Education.prototype;
  dart.addTypeTests(education.Education);
  const from$ = Symbol("Education.from");
  const to$ = Symbol("Education.to");
  const organization$ = Symbol("Education.organization");
  const post$ = Symbol("Education.post");
  dart.setLibraryUri(education.Education, "package:devswift2017/models/education.dart");
  dart.setFieldSignature(education.Education, () => ({
    __proto__: dart.getFields(education.Education.__proto__),
    from: dart.fieldType(core.String),
    to: dart.fieldType(core.String),
    organization: dart.fieldType(core.String),
    post: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/devswift2017/models/education", {
    "package:devswift2017/models/education.dart": education
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["education.dart"],"names":[],"mappings":";;;;;;;;IACS;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;sCAEQ,MAAW,IAAS,cAAmB;IAAvC;IAAW;IAAS;IAAmB;;EAAK","file":"education.ddc.js"}');
  // Exports:
  return {
    models__education: education
  };
});

//# sourceMappingURL=education.ddc.js.map
