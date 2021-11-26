import {Gazetteer} from "./Gazetteer";

export abstract class AutoNER {

    protected personGazetteer: Gazetteer
    protected organizationGazetteer: Gazetteer
    protected locationGazetteer: Gazetteer

    /**
     * Constructor for creating Person, Organization, and Location gazetteers in automatic Named Entity Recognition.
     */
    constructor() {
        this.personGazetteer = new Gazetteer("PERSON", "gazetteer-person.txt");
        this.organizationGazetteer = new Gazetteer("ORGANIZATION", "gazetteer-organization.txt");
        this.locationGazetteer = new Gazetteer("LOCATION", "gazetteer-location.txt");
    }
}