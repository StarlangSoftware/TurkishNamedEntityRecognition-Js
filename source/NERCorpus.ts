import {Corpus} from "nlptoolkit-corpus/dist/Corpus";
import * as fs from "fs";
import {NamedEntitySentence} from "./NamedEntitySentence";
import {Sentence} from "nlptoolkit-corpus/dist/Sentence";

export class NERCorpus extends Corpus{

    /**
     * Another constructor of {@link NERCorpus} which takes a fileName of the corpus as an input, reads the
     * corpus from that file.
     *
     * @param fileName Name of the corpus file.
     */
    constructor(fileName?: string) {
        super();
        if (fileName != undefined){
            let data = fs.readFileSync(fileName, 'utf8')
            let lines = data.split("\n")
            for (let line of lines) {
                this.addSentence(new NamedEntitySentence(line))
            }
        }
    }

    /**
     * addSentence adds a new sentence to the sentences {@link Array}
     * @param s Sentence to be added.
     */
    addSentence(s: Sentence) {
        this.sentences.push(s)
    }
}