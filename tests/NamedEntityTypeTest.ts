import * as assert from "assert";
import {NamedEntityTypeStatic} from "../source/NamedEntityTypeStatic";
import {NamedEntityType} from "../source/NamedEntityType";

describe('NamedEntityTypeTest', function() {
    describe('NamedEntityTypeTest', function() {
        it('testNamedEntityType', function() {
            assert.strictEqual(NamedEntityTypeStatic.getNamedEntityType("person"), NamedEntityType.PERSON);
            assert.strictEqual(NamedEntityTypeStatic.getNamedEntityType("Time"), NamedEntityType.TIME);
            assert.strictEqual(NamedEntityTypeStatic.getNamedEntityType("location"), NamedEntityType.LOCATION);
        });
    });
});