"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoNER = void 0;
const Gazetteer_1 = require("./Gazetteer");
class AutoNER {
    personGazetteer;
    organizationGazetteer;
    locationGazetteer;
    /**
     * Constructor for creating Person, Organization, and Location gazetteers in automatic Named Entity Recognition.
     */
    constructor() {
        this.personGazetteer = new Gazetteer_1.Gazetteer("PERSON", "gazetteer-person.txt");
        this.organizationGazetteer = new Gazetteer_1.Gazetteer("ORGANIZATION", "gazetteer-organization.txt");
        this.locationGazetteer = new Gazetteer_1.Gazetteer("LOCATION", "gazetteer-location.txt");
    }
}
exports.AutoNER = AutoNER;
//# sourceMappingURL=AutoNER.js.map