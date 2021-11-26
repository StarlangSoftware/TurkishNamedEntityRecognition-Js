import {SlotType} from "./SlotType";

export class Slot {

    private type: SlotType
    private tag: string

    constructor(typeOrSlot: any, tag?: string) {
        if (tag != undefined){
            this.type = typeOrSlot
            this.tag = tag
        } else {
            if (typeOrSlot == "O"){
                this.type = SlotType.O;
                this.tag = undefined;
            } else {
                let type = typeOrSlot.substring(0, typeOrSlot.indexOf("-"));
                let tag = typeOrSlot.substring(typeOrSlot.indexOf("-") + 1);
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
    }

    getType(): SlotType{
        return this.type
    }

    getTag(): string{
        return this.tag
    }

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