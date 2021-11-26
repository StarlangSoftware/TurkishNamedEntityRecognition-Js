(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-dictionary/dist/Dictionary/Word"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NamedEntityWord = void 0;
    const Word_1 = require("nlptoolkit-dictionary/dist/Dictionary/Word");
    class NamedEntityWord extends Word_1.Word {
        /**
         * A constructor of {@link NamedEntityWord} which takes name and nameEntityType as input and sets the corresponding attributes
         * @param name Name of the word
         * @param namedEntityType {@link NamedEntityType} of the word
         */
        constructor(name, namedEntityType) {
            super(name);
            this.namedEntityType = namedEntityType;
        }
        /**
         * Accessor method for namedEntityType attribute.
         *
         * @return namedEntityType of the word.
         */
        getNamedEntityType() {
            return this.namedEntityType;
        }
    }
    exports.NamedEntityWord = NamedEntityWord;
});
//# sourceMappingURL=NamedEntityWord.js.map