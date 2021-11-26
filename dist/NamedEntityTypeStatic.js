(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./NamedEntityType"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NamedEntityTypeStatic = void 0;
    const NamedEntityType_1 = require("./NamedEntityType");
    class NamedEntityTypeStatic {
        /**
         * Static function to convert a string entity type to {@link NamedEntityType} type.
         * @param entityType Entity type in string form
         * @return Entity type in {@link NamedEntityType} form
         */
        static getNamedEntityType(entityType) {
            switch (entityType.toUpperCase()) {
                case "PERSON":
                    return NamedEntityType_1.NamedEntityType.PERSON;
                case "LOCATION":
                    return NamedEntityType_1.NamedEntityType.LOCATION;
                case "ORGANIZATION":
                    return NamedEntityType_1.NamedEntityType.ORGANIZATION;
                case "TIME":
                    return NamedEntityType_1.NamedEntityType.TIME;
                case "MONEY":
                    return NamedEntityType_1.NamedEntityType.MONEY;
                default:
                    return NamedEntityType_1.NamedEntityType.NONE;
            }
        }
        /**
         * Static function to convert a {@link NamedEntityType} to string form.
         * @param entityType Entity type in {@link NamedEntityType} form
         * @return Entity type in string form
         */
        static getNamedEntity(entityType) {
            if (entityType == undefined)
                return undefined;
            switch (entityType) {
                case NamedEntityType_1.NamedEntityType.PERSON:
                    return "PERSON";
                case NamedEntityType_1.NamedEntityType.LOCATION:
                    return "LOCATION";
                case NamedEntityType_1.NamedEntityType.ORGANIZATION:
                    return "ORGANIZATION";
                case NamedEntityType_1.NamedEntityType.TIME:
                    return "TIME";
                case NamedEntityType_1.NamedEntityType.MONEY:
                    return "MONEY";
                default:
                    return "NONE";
            }
        }
    }
    exports.NamedEntityTypeStatic = NamedEntityTypeStatic;
});
//# sourceMappingURL=NamedEntityTypeStatic.js.map