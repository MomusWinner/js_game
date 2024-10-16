import { Person } from './person.js'

export class Attack {
    /**
     * @param {string} name 
     * @param {number} damage 
     */
    constructor(name, damage) {
        this.name = name
        this.damage = damage
    }

    /**
     * @param {Person} person 
     */
    async hitPerson(person) {
        await person.takeDamage(this.damage)
    }
}

export class Enemy extends Person {
    /**
     * @param {string} name
     * @param {number} health
     * @param {Array<Attack>} attacks
     */
    constructor(name, health, attacks) {
        super(name, health)
        this.attacks = attacks
    }
    
    getAttack() {
        const randomIndex = Math.floor(Math.random() * this.attacks.length);
        return this.attacks[randomIndex]
    }
}
 
