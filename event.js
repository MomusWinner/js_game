export class Event{
    constructor(){
    }

    start(){
        throw new Error('Method \'start()\' must be implemented.');
    }
}

export class Choice{
    constructor(text){
        this.text = text
    }

    apply() {
        throw new Error('Method \'apply()\' must be implemented.');
    }
}

export class ChoiceEvent extends Event{
    constructor(choices){
        super()
        this.choices = choices
    }

    start(){
        this.print_choices()
    }

    print_choices(){
        for (let i = 0; i < this.choices.length; i++) {
            /** @type {Choice} */
            const choice = this.choices[i];
            console.log("1. " + choice.text)
        }
    }
}