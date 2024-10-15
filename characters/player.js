import {Person} from "./person.js"

class Player extends Person{ 
    constructor(name, health){
        super(name, health)
        this.inventory = []
    }
}

export const player = new Player("Bob", 100)