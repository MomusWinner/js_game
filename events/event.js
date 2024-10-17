import { askQuestion } from "../utils.js";

export class Event{
    constructor(){
    }

    async start(){
        throw new Error('Method \'start()\' must be implemented.');
    }
}

export class Choice{
    constructor(text, onSelected) {
        this.text = text
        this.onSelected = onSelected
    }

    async apply() {
        await this.onSelected()
    }
}

export class ChoiceEvent extends Event{
    /**
     * @param {Array<Choice>} choices 
     * @param {string} [question="Введите номер выбора: "] 
     */
    constructor(choices, question = "Введите номер выбора: "){
        super()
        this.choices = choices
        this.question = question
    }

    async start(){
        this.print_choices()
        let i = await askQuestion(this.question)
        while  (!(!isNaN(i) && i <= this.choices.length && i >= 1)){
            console.log("Введи нормально додик")
            i = await askQuestion(this.question, 0)
        }
        await this.choices[i - 1].apply()
    }

    print_choices(){
        for (let i = 0; i < this.choices.length; i++) {
            const choice = this.choices[i];
            console.log((i + 1) + ". " + choice.text)
        }
    }
}
