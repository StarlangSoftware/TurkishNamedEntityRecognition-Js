import { NamedEntityType } from "./NamedEntityType";
export declare class NamedEntityTypeStatic {
    /**
     * Static function to convert a string entity type to {@link NamedEntityType} type.
     * @param entityType Entity type in string form
     * @return Entity type in {@link NamedEntityType} form
     */
    static getNamedEntityType(entityType: string): NamedEntityType;
    /**
     * Static function to convert a {@link NamedEntityType} to string form.
     * @param entityType Entity type in {@link NamedEntityType} form
     * @return Entity type in string form
     */
    static getNamedEntity(entityType: NamedEntityType): string;
}
