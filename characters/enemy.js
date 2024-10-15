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
    hitPerson(person) {
        person.health -= this.damage
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
        const randomIndex = Math.floor(Math.random() * arr.length);
        return this.attacks[randomIndex]
    }
    
    /**
     * @param {Person} person 
     */
    attack(person) {
        this.getAttack().hitPerson(person)
    }
}
 
