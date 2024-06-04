import {SlotType} from "./SlotType";

export class Slot {

    private type: SlotType
    private tag: string

    /**
     * Constructor for the Slot object. Slot object stores the information about more specific entities. The slot
     * type represents the beginning, inside or outside the slot, whereas tag represents the entity tag of the
     * slot.
     * @param type Type of the slot. B, I or O for beginning, inside, outside the slot respectively.
     * @param tag Tag of the slot.
     */
    constructor1(type: SlotType, tag: string) {
        this.type = type
        this.tag = tag
    }

    /**
     * Second constructor of the slot for a given slot string. A Slot string consists of slot type and slot tag
     * separated with '-'. For example B-Person represents the beginning of a person. For outside tagging simple 'O' is
     * used.
     * @param slot Input slot string.
     */
    constructor2(slot: string){
        if (slot == "O"){
            this.type = SlotType.O;
            this.tag = undefined;
        } else {
            let type = slot.substring(0, slot.indexOf("-"));
            let tag = slot.substring(slot.indexOf("-") + 1);
            switch (type){
                case "B":
                    this.type = SlotType.B;
                    break;
                case "I":
                    this.type = SlotType.I;
                    break;
            }
            this.tag = tag;
        }
    }

    constructor(typeOrSlot: any, tag?: string) {
        if (tag != undefined){
            this.constructor1(typeOrSlot, tag)
        } else {
            this.constructor2(typeOrSlot)
        }
    }

    /**
     * Accessor for the type of the slot.
     * @return Type of the slot.
     */
    getType(): SlotType{
        return this.type
    }

    /**
     * Accessor for the tag of the slot.
     * @return Tag of the slot.
     */
    getTag(): string{
        return this.tag
    }

    /**
     * toString method of the slot.
     * @return Type and tag separated with '-'. If the type is outside, it returns 'O'.
     */
    toString(): string{
        switch (this.type){
            case SlotType.O:
                return "O";
            case SlotType.B:
                return "B-" + this.tag;
            case SlotType.I:
                return "I-" + this.tag;
        }
        return "";
    }

}