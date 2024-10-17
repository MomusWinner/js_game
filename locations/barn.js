import { player } from '../characters/player.js';
import { LocationEvent } from '../events/location.js';
import { DialogEvent, PhraseEvent } from '../events/dialog.js'
import { Person } from '../characters/person.js';
import { Attack } from '../characters/enemy.js';
import { forest } from './forest.js';
import { narrator } from '../characters/characters.js';

const girl = new Person("Девочка", 10)
const shovel = new Attack("Лопата", 10)

const start_d = new DialogEvent([
    new PhraseEvent(girl, "Привет путник! Тебе нужно победить злого короля."),
    new PhraseEvent(player, "Хорошо"),
    new PhraseEvent(girl, "Держи стартовое оружие"),
    { start: async () => { await player.grabAttack(shovel) } },
    new PhraseEvent(player, "С кайфом! Как мне этой палкой вонючей убить короля ААААААА?!!!?"),
    new PhraseEvent(girl, "не мороси ты эээээээ. Иди на юг, брат, там мой дед, он даст тебе нормальное оружие."),
    new PhraseEvent(player, "Ок"),
    new PhraseEvent(narrator, "Путник отправился на юг."),
    forest
])

export const barn = new LocationEvent("Срарай", "Вонючий сарай..", start_d)
