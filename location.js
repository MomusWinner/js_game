export class Location{
    constructor(name, description, start_event){
        this.name = name
        this.description = description
        this.start_event = start_event
    }

    start(){
        this.start_event.start()
    }
}