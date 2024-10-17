import { player } from '../characters/player.js';
import { LocationEvent } from '../events/location.js';
import { DialogEvent, PhraseEvent } from '../events/dialog.js'
import { Attack, Enemy } from '../characters/enemy.js';
import { FightEvent } from '../events/fight.js';
import { Choice, ChoiceEvent } from '../events/event.js';
import { narrator } from '../characters/characters.js';


const bear = new Enemy("Медведь", 30, [
    new Attack("укус", 20),
    new Attack("хук", 15)
])

let dialog_d = new DialogEvent([
    new PhraseEvent(player, "text text"),
    new FightEvent(player, bear, 
        {start:async () => await player.grabItem("skin", {name:"Шкура медведя"})},
        {start:async () => {}}),
    new PhraseEvent(narrator, "Путник сильно проголодался. Под деревом он види пару грибочков."),
    new ChoiceEvent([
        new Choice("съесть гриб", async () => {
            await (new PhraseEvent(narrator, "Путник съел глюценогенные грибы.")).start()
        }),
        new Choice("остатся голодным", async () => {
            await (new PhraseEvent(narrator, "Путник умер от голода.")).start()
            await player.death()
        })
    ], "Путник сильно проголодался. Под деревом он види пару грибочков")
    
])

export const forest = new LocationEvent("Лес", "Вонючий лес", dialog_d)

