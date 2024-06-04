import { SlotType } from "./SlotType";
export declare class Slot {
    private type;
    private tag;
    /**
     * Constructor for the Slot object. Slot object stores the information about more specific entities. The slot
     * type represents the beginning, inside or outside the slot, whereas tag represents the entity tag of the
     * slot.
     * @param type Type of the slot. B, I or O for beginning, inside, outside the slot respectively.
     * @param tag Tag of the slot.
     */
    constructor1(type: SlotType, tag: string): void;
    /**
     * Second constructor of the slot for a given slot string. A Slot string consists of slot type and slot tag
     * separated with '-'. For example B-Person represents the beginning of a person. For outside tagging simple 'O' is
     * used.
     * @param slot Input slot string.
     */
    constructor2(slot: string): void;
    constructor(typeOrSlot: any, tag?: string);
    /**
     * Accessor for the type of the slot.
     * @return Type of the slot.
     */
    getType(): SlotType;
    /**
     * Accessor for the tag of the slot.
     * @return Tag of the slot.
     */
    getTag(): string;
    /**
     * toString method of the slot.
     * @return Type and tag separated with '-'. If the type is outside, it returns 'O'.
     */
    toString(): string;
}
