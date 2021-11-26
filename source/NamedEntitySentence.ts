import {Sentence} from "nlptoolkit-corpus/dist/Sentence";
import {NamedEntityType} from "./NamedEntityType";
import {Word} from "nlptoolkit-dictionary/dist/Dictionary/Word";
import {NamedEntityTypeStatic} from "./NamedEntityTypeStatic";
import {NamedEntityWord} from "./NamedEntityWord";

export class NamedEntitySentence extends Sentence{

    /**
     * Another constructor of {@link NamedEntitySentence}. It takes input a named entity annotated sentence in string
     * form, divides the sentence with respect to space and sets the tagged words with respect to their tags.
     * @param sentence Named Entity annotated sentence in string form
     */
    constructor(sentence?: string) {
        super();
        if (sentence != undefined){
            let type = NamedEntityType.NONE;
            let wordArray = sentence.split(" ");
            for (let word of wordArray){
                if (word != ""){
                    if (word != "<b_enamex"){
                        if (word.startsWith("TYPE=\"")){
                            let typeIndexEnd = word.indexOf('\"', 6);
                            if (typeIndexEnd != -1){
                                let entityType = word.substring(6, typeIndexEnd);
                                type = NamedEntityTypeStatic.getNamedEntityType(entityType);
                            }
                            if (word.endsWith("e_enamex>")){
                                let candidate = word.substring(word.indexOf('>') + 1, word.indexOf('<'));
                                if (candidate != ""){
                                    this.words.push(new NamedEntityWord(candidate, type));
                                }
                                type = NamedEntityType.NONE;
                            } else {
                                let candidate = word.substring(word.indexOf('>') + 1);
                                if (candidate != ""){
                                    this.words.push(new NamedEntityWord(candidate, type));
                                }
                            }
                        } else {
                            if (word.endsWith("e_enamex>")){
                                let candidate = word.substring(0, word.indexOf('<'));
                                if (candidate != ""){
                                    this.words.push(new NamedEntityWord(candidate, type));
                                }
                                type = NamedEntityType.NONE;
                            } else {
                                if (word != ""){
                                    this.words.push(new NamedEntityWord(word, type));
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}