import * as fs from "fs";

export class Gazetteer {

    private data: Set<string> = new Set<string>()
    private name: string

    /**
     * A constructor for a specific gazetteer. The constructor takes name of the gazetteer and file name of the
     * gazetteer as input, reads the gazetteer from the input file.
     * @param name Name of the gazetteer. This name will be used in programming to separate different gazetteers.
     * @param fileName File name of the gazetteer data.
     */
    constructor(name: string, fileName: string) {
        this.name = name
        let data = fs.readFileSync(fileName, 'utf8')
        let lines = data.split("\n")
        for (let line of lines) {
            this.data.add(line.toLocaleLowerCase("tr"))
        }
    }

    /**
     * Accessor method for the name of the gazetteer.
     * @return Name of the gazetteer.
     */
    getName(): string{
        return this.name
    }

    /**
     * The most important method in {@link Gazetteer} class. Checks if the given word exists in the gazetteer. The check
     * is done in lowercase form.
     * @param word Word to be search in Gazetteer.
     * @return True if the word is in the Gazetteer, False otherwise.
     */
    contains(word: string):boolean{
        let lowerCase = word.toLocaleLowerCase("tr")
        return this.data.has(lowerCase)
    }
}