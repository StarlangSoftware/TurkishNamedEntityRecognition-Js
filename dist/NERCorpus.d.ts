import { Corpus } from "nlptoolkit-corpus/dist/Corpus";
import { Sentence } from "nlptoolkit-corpus/dist/Sentence";
export declare class NERCorpus extends Corpus {
    /**
     * Another constructor of {@link NERCorpus} which takes a fileName of the corpus as an input, reads the
     * corpus from that file.
     *
     * @param fileName Name of the corpus file.
     */
    constructor(fileName?: string);
    /**
     * addSentence adds a new sentence to the sentences {@link Array}
     * @param s Sentence to be added.
     */
    addSentence(s: Sentence): void;
}
