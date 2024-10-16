import { Event } from './event.js';
import { Person } from '../characters/person.js';
import { printLine } from '../utils.js';


export class FightEvent extends Event {
    /**
     * @param {Player} player
     * @param {Person} enemy
     * @param {Event} winEvent 
     * @param {Event} loseEvent 
     */
    constructor(player, enemy, winEvent, loseEvent) {
        super()
         
        this.player = player;
        this.enemy = enemy;
        this.winEvent = winEvent
        this.loseEvent = loseEvent
    }

    async start() {
        await printLine(`Вы встетили ${this.enemy.name} с ${this.enemy.health} хп`);
        await printLine("------------------")
        await this.enemyAttack()
    }

    async enemyAttack() {
        await this.enemy.attack(this.player)
        if (this.player.health <= 0) {
            this.loseEvent.start()
            return
        }
        this.playerAttack()
    }

    async playerAttack() {
        await this.player.attack(this.enemy)
        if (this.enemy.health <= 0) {
            this.winEvent.start()
            return
        }
        this.enemyAttack()
    }
}
