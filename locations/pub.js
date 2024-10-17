import { player } from '../characters/player.js';
import { LocationEvent } from '../events/location.js';
import { DialogEvent, PhraseEvent } from '../events/dialog.js'
import { Attack, Enemy } from '../characters/enemy.js';
import { FightEvent } from '../events/fight.js';
import { narrator } from '../characters/characters.js';
import { Choice, ChoiceEvent } from '../events/event.js';

const barmen = new Enemy("Бармен", 60, [
    new Attack("Удар розочкой", 7),
    new Attack("Коктейль Молотова", 10),
])

const nextLoc = new DialogEvent([
    new PhraseEvent(narrator, "После изумительного вечера, путник решил направится в покои короля.")
])

const barmenDialog = new DialogEvent([
    new PhraseEvent(barmen, "Ладно, ты победил меня. Я дам тебе пиво, но помни. С большой силой приходит большая ответственность."),
    new PhraseEvent(narrator, "Путник увеличил свое здоровье на 150 очков"),
    { start: async () => { player.health += 150 }},
    nextLoc
])

const alchoholChoice = new ChoiceEvent([
    new Choice("Пиво", async () => {
        await new DialogEvent([
            new PhraseEvent(barmen, "Ты что, пришел в мой паб и хочешь выпить пива??"),
            new PhraseEvent(narrator, "В этом мире пиво запрещено."),
            new FightEvent(player, barmen, barmenDialog)
        ]).start()
    }),
    new Choice("Вино", async () => {
        await new DialogEvent([
            new PhraseEvent(barmen, "Конечно брат, сейчас налью"),
            new PhraseEvent(narrator, "Путник увеличил свое здоровье на 50 очков"),
            { start: async () => { player.health += 50 }},
            nextLoc
        ]).start()
    }),
], "Выберите, что вы хотите выпить")

export const pub = new LocationEvent("Паб", "Вонючий паб", alchoholChoice)
