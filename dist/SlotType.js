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
    exports.SlotType = void 0;
    var SlotType;
    (function (SlotType) {
        SlotType[SlotType["B"] = 0] = "B";
        SlotType[SlotType["I"] = 1] = "I";
        SlotType[SlotType["O"] = 2] = "O";
    })(SlotType = exports.SlotType || (exports.SlotType = {}));
});
//# sourceMappingURL=SlotType.js.map