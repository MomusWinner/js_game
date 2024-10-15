import { Person } from "./characters/person.js";
import { player } from "./characters/player.js";
import { Event } from "./event.js";
import {printLine} from "./utils.js"

export class PhraseEvent extends Event{
    /**
     * 
     * @param {Person} person 
     * @param {string} text 
     */
    constructor(person, text){
        super()
        this.person = person
        this.text = text
    }

    async start(){
        if(this.person === player)
            console.log("★ " + this.person.name)
        else
            console.log("✩ " + this.person.name)
        console.log("-----------------")
        await printLine(this.text)
        console.log()
    }
}

export class DialogEvent extends Event{
    /**
     * 
     * @param {Array<Event>} dialogEvents 
     */
    constructor(dialogEvents){
        super()
        this.dialogEvents = dialogEvents
    }

    async start(){
        for (let i = 0; i < this.dialogEvents.length; i++) {
            await this.dialogEvents[i].start()
        }
    }
}

