import { Choice, ChoiceEvent } from "../events/event.js"
import { printLine } from "../utils.js"
import { Attack } from "./enemy.js"
import {Person} from "./person.js"

class Player extends Person{ 
    constructor(name, health){
        super(name, health)
        this.inventory = {}
        this.attacks = [
            new Attack("Удар молотком", 50),
            new Attack("Удар головой", 100)
        ]
    }

    async getAttack() {
        await printLine(`Выберите атаку:`)
        let chosenAttack

        const choices = this.attacks.map((attack) => {
            const choiceString = `${attack.name} -- ${attack.damage} урона`
            return new Choice(choiceString, () => {
                chosenAttack = attack
            })
        })

        await new ChoiceEvent(choices, "Выберите атаку:").start()
        return chosenAttack
    }

    async grabAttack(attack) {
        this.attacks.push(attack)
        await printLine(`-- У вас появилась новая атака (${attack.name})! --\n`)
    }

    async grabItem(id, object) {
        this.inventory[id] = object
        await printLine(`-- Вы подобрали (${object.name})! --\n`)
    }

    async death(){
        await printLine("Вы умерли")
        process.exit()
    }
}

export const player = new Player("Bob", 100)
