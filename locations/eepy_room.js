import { player } from '../characters/player.js';
import { LocationEvent } from '../events/location.js';
import { DialogEvent, PhraseEvent } from '../events/dialog.js'
import { Attack, Enemy } from '../characters/enemy.js';
import { FightEvent } from '../events/fight.js';
import { narrator } from '../characters/characters.js';
import { Choice, ChoiceEvent } from '../events/event.js';
import { Person } from '../characters/person.js';


const king = new Enemy("Король", 1, [
    new Attack("Поплакать", 0),
])

const guards = new Enemy("СТРАЖА", 70, [
    new Attack("Парное катание", 20),
    new Attack("Мага супер ультра удар копьем", 5),
    new Attack("Уддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддддар головой", 10),
])

const end = new Person("Конец", 1)

const eepyDialog = new DialogEvent([
    new PhraseEvent(king, "А ЧТО ВЫ ДЕЛАЕТЕ В МОЕЙ КРОВАТЕ?;??::!??*?!?!**!??!?:!:"),
    new PhraseEvent(king, "СТРАЖА#!^%^%#!&^#!&^"),
    new FightEvent(player, guards, { start: () => {} }),
    new PhraseEvent(king, "О нет ты победил мою СТРАЖУ, пощади меня и будем править вместе!"),
    new ChoiceEvent([
        new Choice("Убить короля", async () => {
            await new FightEvent(player, king, new DialogEvent([
                new PhraseEvent(narrator, "Путник убил короля ни за что, и его бросили в тюрму до скончания веков"),
                new PhraseEvent(end, "Конец"),
            ])).start()
        }),
        new Choice("Пощадить короля и увеличить налог еще на 10%", async () => {
            await new DialogEvent([
                new PhraseEvent(narrator, "Путник поженился на дочери и короле, и правит в праздности"),
                new PhraseEvent(end, "Конец"),
            ]).start()
        })
    ])
]);

export const kingsEepyRoom = new LocationEvent("Покои короля", "Вонючие покои короля", eepyDialog)
