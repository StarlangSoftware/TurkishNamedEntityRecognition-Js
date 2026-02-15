"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gazetteer = void 0;
const fs = __importStar(require("fs"));
class Gazetteer {
    data = new Set();
    name;
    /**
     * A constructor for a specific gazetteer. The constructor takes name of the gazetteer and file name of the
     * gazetteer as input, reads the gazetteer from the input file.
     * @param name Name of the gazetteer. This name will be used in programming to separate different gazetteers.
     * @param fileName File name of the gazetteer data.
     */
    constructor(name, fileName) {
        this.name = name;
        let data = fs.readFileSync(fileName, 'utf8');
        let lines = data.split("\n");
        for (let line of lines) {
            this.data.add(line.toLocaleLowerCase("tr"));
        }
    }
    /**
     * Accessor method for the name of the gazetteer.
     * @return Name of the gazetteer.
     */
    getName() {
        return this.name;
    }
    /**
     * The most important method in {@link Gazetteer} class. Checks if the given word exists in the gazetteer. The check
     * is done in lowercase form.
     * @param word Word to be search in Gazetteer.
     * @return True if the word is in the Gazetteer, False otherwise.
     */
    contains(word) {
        let lowerCase = word.toLocaleLowerCase("tr");
        return this.data.has(lowerCase);
    }
}
exports.Gazetteer = Gazetteer;
//# sourceMappingURL=Gazetteer.js.map