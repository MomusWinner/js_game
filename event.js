import { askQuestion } from "./utils.js";

export class Event{
    constructor(){
    }

    start(){
        throw new Error('Method \'start()\' must be implemented.');
    }
}

export class Choice{
    constructor(text, onSelected){
        this.text = text
        this.onSelected = onSelected
    }

    apply() {
        this.onSelected()
    }
}

export class ChoiceEvent extends Event{
    constructor(choices){
        super()
        this.choices = choices
    }

    async start(){
        this.print_choices()
        let i = await askQuestion("Введите номер выбора: ")
        if  (!(!isNaN(i) && i <= this.choices.length && i >= 1)){
            console.log("Введи нормально додик")
            await this.start()
        }
        this.choices[i - 1].apply()
    }

    print_choices(){
        for (let i = 0; i < this.choices.length; i++) {
            /** @type {Choice} */
            const choice = this.choices[i];
            console.log("1. " + choice.text)
        }
    }
}