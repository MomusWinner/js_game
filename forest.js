import { player } from './characters/player.js';
import {LocationEvent} from './events/location.js';
import {Choice, ChoiceEvent} from './events/event.js';
import {DialogEvent, PhraseEvent} from './events/dialog.js'
import { Attack, Enemy } from './characters/enemy.js';
import { FightEvent } from './events/fight.js';

const bear = new Enemy("Медведь", 30, [
    new Attack("укус", 20),
    new Attack("хук", 15)
])

let dialog_d = new DialogEvent([
    new PhraseEvent(player, "text text"),
    new FightEvent(player, bear, () => {}, () => {})

])

export const forest = new LocationEvent("Лес", "Вонючий лес", {start:()=>{}})

