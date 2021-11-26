(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-corpus/dist/Corpus", "fs", "./NamedEntitySentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NERCorpus = void 0;
    const Corpus_1 = require("nlptoolkit-corpus/dist/Corpus");
    const fs = require("fs");
    const NamedEntitySentence_1 = require("./NamedEntitySentence");
    class NERCorpus extends Corpus_1.Corpus {
        /**
         * Another constructor of {@link NERCorpus} which takes a fileName of the corpus as an input, reads the
         * corpus from that file.
         *
         * @param fileName Name of the corpus file.
         */
        constructor(fileName) {
            super();
            if (fileName != undefined) {
                let data = fs.readFileSync(fileName, 'utf8');
                let lines = data.split("\n");
                for (let line of lines) {
                    this.addSentence(new NamedEntitySentence_1.NamedEntitySentence(line));
                }
            }
        }
        /**
         * addSentence adds a new sentence to the sentences {@link Array}
         * @param s Sentence to be added.
         */
        addSentence(s) {
            this.sentences.push(s);
        }
    }
    exports.NERCorpus = NERCorpus;
});
//# sourceMappingURL=NERCorpus.js.map