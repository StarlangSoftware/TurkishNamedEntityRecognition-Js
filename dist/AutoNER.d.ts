import { Gazetteer } from "./Gazetteer";
export declare abstract class AutoNER {
    protected personGazetteer: Gazetteer;
    protected organizationGazetteer: Gazetteer;
    protected locationGazetteer: Gazetteer;
    /**
     * Constructor for creating Person, Organization, and Location gazetteers in automatic Named Entity Recognition.
     */
    constructor();
}
