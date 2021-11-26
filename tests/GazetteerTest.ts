import * as assert from "assert";
import {Gazetteer} from "../dist/Gazetteer";

describe('GazetteerTest', function() {
    describe('GazetteerTest', function() {
        it('testContains', function() {
            let gazetteer = new Gazetteer("location", "gazetteer-location.txt");
            assert.ok(gazetteer.contains("bağdat"));
            assert.ok(gazetteer.contains("BAĞDAT"));
            assert.ok(gazetteer.contains("belçika"));
            assert.ok(gazetteer.contains("BELÇİKA"));
            assert.ok(gazetteer.contains("körfez"));
            assert.ok(gazetteer.contains("KÖRFEZ"));
            assert.ok(gazetteer.contains("küba"));
            assert.ok(gazetteer.contains("KÜBA"));
            assert.ok(gazetteer.contains("varşova"));
            assert.ok(gazetteer.contains("VARŞOVA"));
            assert.ok(gazetteer.contains("krallık"));
            assert.ok(gazetteer.contains("KRALLIK"));
            assert.ok(gazetteer.contains("berlin"));
            assert.ok(gazetteer.contains("BERLİN"));
        });
    });
});
