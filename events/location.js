import { printLine } from "../utils.js"
import { Event } from "./event.js"

export class LocationEvent extends Event{
    constructor(name, description, start_event){
        super()
        this.name = name
        this.description = description
        this.start_event = start_event
    }

    async start() {
        await printLine(`Вы пришли в ${this.name}`)
        await printLine(`-----------------------------`)
        this.start_event.start()
    }
}
