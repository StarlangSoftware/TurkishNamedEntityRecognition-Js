(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./SlotType"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Slot = void 0;
    const SlotType_1 = require("./SlotType");
    class Slot {
        constructor(typeOrSlot, tag) {
            if (tag != undefined) {
                this.type = typeOrSlot;
                this.tag = tag;
            }
            else {
                if (typeOrSlot == "O") {
                    this.type = SlotType_1.SlotType.O;
                    this.tag = undefined;
                }
                else {
                    let type = typeOrSlot.substring(0, typeOrSlot.indexOf("-"));
                    let tag = typeOrSlot.substring(typeOrSlot.indexOf("-") + 1);
                    switch (type) {
                        case "B":
                            this.type = SlotType_1.SlotType.B;
                            break;
                        case "I":
                            this.type = SlotType_1.SlotType.I;
                            break;
                    }
                    this.tag = tag;
                }
            }
        }
        getType() {
            return this.type;
        }
        getTag() {
            return this.tag;
        }
        toString() {
            switch (this.type) {
                case SlotType_1.SlotType.O:
                    return "O";
                case SlotType_1.SlotType.B:
                    return "B-" + this.tag;
                case SlotType_1.SlotType.I:
                    return "I-" + this.tag;
            }
            return "";
        }
    }
    exports.Slot = Slot;
});
//# sourceMappingURL=Slot.js.map