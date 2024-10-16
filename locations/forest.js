import { player } from '../characters/player.js';
import { LocationEvent } from '../events/location.js';
import { DialogEvent, PhraseEvent } from '../events/dialog.js'
import { Attack, Enemy } from '../characters/enemy.js';
import { FightEvent } from '../events/fight.js';
import { Choice, ChoiceEvent } from '../events/event.js';
import { narrator } from '../characters/characters.js';
import { village } from './village.js';


const bear = new Enemy("Медведь", 30, [
    new Attack("укус", 20),
    new Attack("хук левой", 15)
])

let dialog_d = new DialogEvent([
    new FightEvent(player, bear, {start:async () => await player.grabItem("skin", {name:"Шкура медведя"})}),
    new PhraseEvent(narrator, "Путник сильно проголодался. Под деревом он види пару грибочков."),
    new ChoiceEvent([
        new Choice("съесть гриб", async () => {
            await (new PhraseEvent(narrator, "Путник съел глюценогенные грибы.")).start()
        }),
        new Choice("остатся голодным", async () => {
            await (new PhraseEvent(narrator, "Путник умер от голода.")).start()
            await player.death()
        })
    ], "Путник сильно проголодался. Под деревом он види пару грибочков"),
    new PhraseEvent(narrator, "Путник, под кайфом от лесных грибочков, дошёл до деревни."),
    village
])

export const forest = new LocationEvent("Лес", "Вонючий лес", dialog_d)

