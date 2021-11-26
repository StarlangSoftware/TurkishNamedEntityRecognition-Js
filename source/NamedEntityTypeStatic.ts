import {NamedEntityType} from "./NamedEntityType";

export class NamedEntityTypeStatic {

    /**
     * Static function to convert a string entity type to {@link NamedEntityType} type.
     * @param entityType Entity type in string form
     * @return Entity type in {@link NamedEntityType} form
     */
    static getNamedEntityType(entityType: string): NamedEntityType{
        switch (entityType.toUpperCase()){
            case "PERSON":
                return NamedEntityType.PERSON;
            case "LOCATION":
                return NamedEntityType.LOCATION;
            case "ORGANIZATION":
                return NamedEntityType.ORGANIZATION;
            case "TIME":
                return NamedEntityType.TIME;
            case "MONEY":
                return NamedEntityType.MONEY;
            default:
                return NamedEntityType.NONE;
        }
    }

    /**
     * Static function to convert a {@link NamedEntityType} to string form.
     * @param entityType Entity type in {@link NamedEntityType} form
     * @return Entity type in string form
     */
    static getNamedEntity(entityType: NamedEntityType): string{
        if (entityType == undefined)
            return undefined;
        switch (entityType){
            case NamedEntityType.PERSON:
                return "PERSON";
            case NamedEntityType.LOCATION:
                return "LOCATION";
            case NamedEntityType.ORGANIZATION:
                return "ORGANIZATION";
            case NamedEntityType.TIME:
                return "TIME";
            case NamedEntityType.MONEY:
                return "MONEY";
            default:
                return "NONE";
        }
    }
}