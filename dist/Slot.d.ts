import { SlotType } from "./SlotType";
export declare class Slot {
    private type;
    private tag;
    constructor(typeOrSlot: any, tag?: string);
    getType(): SlotType;
    getTag(): string;
    toString(): string;
}
