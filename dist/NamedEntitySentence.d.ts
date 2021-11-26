import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
export declare class NamedEntitySentence extends Sentence {
    /**
     * Another constructor of {@link NamedEntitySentence}. It takes input a named entity annotated sentence in string
     * form, divides the sentence with respect to space and sets the tagged words with respect to their tags.
     * @param sentence Named Entity annotated sentence in string form
     */
    constructor(sentence?: string);
}
