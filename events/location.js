import { Event } from "./event.js"

export class LocationEvent extends Event{
    constructor(name, description, start_event){
        super()
        this.name = name
        this.description = description
        this.startEvent = start_event
    }

    start(){
        this.startEvent.start()
    }
}