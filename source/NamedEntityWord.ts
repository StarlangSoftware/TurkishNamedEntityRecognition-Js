import {Word} from "nlptoolkit-dictionary/dist/Dictionary/Word";
import {NamedEntityType} from "./NamedEntityType";

export class NamedEntityWord extends Word{

    private namedEntityType: NamedEntityType

    /**
     * A constructor of {@link NamedEntityWord} which takes name and nameEntityType as input and sets the corresponding attributes
     * @param name Name of the word
     * @param namedEntityType {@link NamedEntityType} of the word
     */
    constructor(name: string, namedEntityType: NamedEntityType) {
        super(name);
        this.namedEntityType = namedEntityType
    }

    /**
     * Accessor method for namedEntityType attribute.
     *
     * @return namedEntityType of the word.
     */
    getNamedEntityType(): NamedEntityType{
        return this.namedEntityType
    }
}