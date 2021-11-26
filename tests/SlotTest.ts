import * as assert from "assert";
import {Slot} from "../dist/Slot";
import {SlotType} from "../dist/SlotType";

describe('SlotTest', function() {
    describe('SlotTest', function() {
        it('testSlot', function() {
            let slot1 = new Slot("B-depart_date.month_name");
            assert.strictEqual(SlotType.B, slot1.getType());
            assert.strictEqual("depart_date.month_name", slot1.getTag());
            assert.strictEqual("B-depart_date.month_name", slot1.toString());
            let slot2 = new Slot("O");
            assert.strictEqual(SlotType.O, slot2.getType());
            assert.strictEqual("O", slot2.toString());
            let slot3 = new Slot("I-round_trip");
            assert.strictEqual(SlotType.I, slot3.getType());
            assert.strictEqual("round_trip", slot3.getTag());
            assert.strictEqual("I-round_trip", slot3.toString());
        });
    });
});