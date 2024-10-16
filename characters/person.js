import { printLine } from "../utils.js";
import { Attack } from "./enemy.js";

export class Person{
    /**
     * @param {string} name 
     * @param {number} health 
     */
    constructor(name, health){
        this.name = name
        this.health = health
        
        /** @type {Array<Attack>} */
        this.attacks = [
            new Attack("ничего", 0)
        ]
    }
    
    /**
     * @returns {Attack} 
     */
    async getAttack() {
        return this.attacks[0]
    }
    
    /**
     * @param {Person} person 
     */
    async attack(person) {
        const attack = await this.getAttack()
        await printLine(`${this.name} атакует ${person.name} с помощью ${attack.name} нанося ${attack.damage} урона`)
        attack.hitPerson(person)
    }

    takeDamage(amount) {
        this.health -= amount
        if (this.health <= 0) {
            this.death()
        }
    }
    
    async death() {
        await printLine(`Вы победили ${this.name}`)
    }

}
