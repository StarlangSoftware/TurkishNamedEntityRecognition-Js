"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedEntitySentence = void 0;
const Sentence_1 = require("nlptoolkit-corpus/dist/Sentence");
const NamedEntityType_1 = require("./NamedEntityType");
const NamedEntityTypeStatic_1 = require("./NamedEntityTypeStatic");
const NamedEntityWord_1 = require("./NamedEntityWord");
class NamedEntitySentence extends Sentence_1.Sentence {
    /**
     * Another constructor of {@link NamedEntitySentence}. It takes input a named entity annotated sentence in string
     * form, divides the sentence with respect to space and sets the tagged words with respect to their tags.
     * @param sentence Named Entity annotated sentence in string form
     */
    constructor(sentence) {
        super();
        if (sentence != undefined) {
            let type = NamedEntityType_1.NamedEntityType.NONE;
            let wordArray = sentence.split(" ");
            for (let word of wordArray) {
                if (word != "") {
                    if (word != "<b_enamex") {
                        if (word.startsWith("TYPE=\"")) {
                            let typeIndexEnd = word.indexOf('\"', 6);
                            if (typeIndexEnd != -1) {
                                let entityType = word.substring(6, typeIndexEnd);
                                type = NamedEntityTypeStatic_1.NamedEntityTypeStatic.getNamedEntityType(entityType);
                            }
                            if (word.endsWith("e_enamex>")) {
                                let candidate = word.substring(word.indexOf('>') + 1, word.indexOf('<'));
                                if (candidate != "") {
                                    this.words.push(new NamedEntityWord_1.NamedEntityWord(candidate, type));
                                }
                                type = NamedEntityType_1.NamedEntityType.NONE;
                            }
                            else {
                                let candidate = word.substring(word.indexOf('>') + 1);
                                if (candidate != "") {
                                    this.words.push(new NamedEntityWord_1.NamedEntityWord(candidate, type));
                                }
                            }
                        }
                        else {
                            if (word.endsWith("e_enamex>")) {
                                let candidate = word.substring(0, word.indexOf('<'));
                                if (candidate != "") {
                                    this.words.push(new NamedEntityWord_1.NamedEntityWord(candidate, type));
                                }
                                type = NamedEntityType_1.NamedEntityType.NONE;
                            }
                            else {
                                if (word != "") {
                                    this.words.push(new NamedEntityWord_1.NamedEntityWord(word, type));
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
exports.NamedEntitySentence = NamedEntitySentence;
//# sourceMappingURL=NamedEntitySentence.js.map