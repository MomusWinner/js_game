import { Event } from "./event.js"

export class LocationEvent extends Event{
    constructor(name, description, start_event){
        super()
        this.name = name
        this.description = description
        this.start_event = start_event
    }

    start(){
        this.start_event.start()
    }
}