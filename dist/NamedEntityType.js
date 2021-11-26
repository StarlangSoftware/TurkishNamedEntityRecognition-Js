(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NamedEntityType = void 0;
    var NamedEntityType;
    (function (NamedEntityType) {
        NamedEntityType[NamedEntityType["NONE"] = 0] = "NONE";
        NamedEntityType[NamedEntityType["PERSON"] = 1] = "PERSON";
        NamedEntityType[NamedEntityType["ORGANIZATION"] = 2] = "ORGANIZATION";
        NamedEntityType[NamedEntityType["LOCATION"] = 3] = "LOCATION";
        NamedEntityType[NamedEntityType["TIME"] = 4] = "TIME";
        NamedEntityType[NamedEntityType["MONEY"] = 5] = "MONEY";
    })(NamedEntityType = exports.NamedEntityType || (exports.NamedEntityType = {}));
});
//# sourceMappingURL=NamedEntityType.js.map