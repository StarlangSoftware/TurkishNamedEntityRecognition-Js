import * as assert from "assert";
import {CounterHashMap} from "nlptoolkit-datastructure/dist/CounterHashMap";
import {NERCorpus} from "../dist/NERCorpus";
import {NamedEntitySentence} from "../dist/NamedEntitySentence";
import {NamedEntityWord} from "../dist/NamedEntityWord";
import {NamedEntityType} from "../dist/NamedEntityType";

describe('NERCorpusTest', function() {
    describe('NERCorpusTest', function() {
        it('testNERCorpus', function() {
            let counter = new CounterHashMap<NamedEntityType>();
            let nerCorpus = new NERCorpus("nerdata.txt");
            assert.strictEqual(27556, nerCorpus.sentenceCount());
            assert.strictEqual(492233, nerCorpus.numberOfWords());
            for (let i = 0; i < nerCorpus.sentenceCount(); i++){
                let namedEntitySentence = <NamedEntitySentence>nerCorpus.getSentence(i);
                for (let j = 0; j < namedEntitySentence.wordCount(); j++){
                    let namedEntityWord = <NamedEntityWord> namedEntitySentence.getWord(j);
                    counter.put(namedEntityWord.getNamedEntityType());
                }
            }
            assert.strictEqual(438976, counter.get(NamedEntityType.NONE));
            assert.strictEqual(23878, counter.get(NamedEntityType.PERSON));
            assert.strictEqual(16931, counter.get(NamedEntityType.ORGANIZATION));
            assert.strictEqual(12448, counter.get(NamedEntityType.LOCATION));
        });
    });
});