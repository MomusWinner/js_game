import { player } from './characters/player.js';
import {LocationEvent} from './events/location.js';
import {Choice, ChoiceEvent} from './events/event.js';
import {DialogEvent, PhraseEvent} from './events/dialog.js'
import { Person } from './characters/person.js';
import { Attack, Enemy } from './characters/enemy.js';
import { FightEvent } from './events/fight.js';

const narrator = Person(". . .")
const girl = new Person("Девочка", 10)
const shovel = new Attack("Лопата", 10)
const bear = new Enemy("Медведь", 30, [
    new Attack("укус", 20),
    new Attack("хук", 15)
])

let start_d = new DialogEvent([
    new PhraseEvent(girl, "Привет путник! Тебе нужно победить злого короля."),
    new PhraseEvent(player, "Хорошо"),
    new PhraseEvent(girl, "Держи стартовое оружие"),
    {start: () => {player.grabAttack(shovel)}},
    new PhraseEvent(player, "С кайфом! Как мне этой палкой вонючей убить короля ААААААА?!!!?"),
    new PhraseEvent(girl, "не мороси ты эээээээ. Иди на юг, брат, там мой дед, он даст тебе нормальное оружие."),
    new PhraseEvent(player, "Ок"),
    new PhraseEvent(narrator, "Путник отправился на юг."),
    new FightEvent(player, bear)
])

let barn = new LocationEvent("Срарай", "Вонючий сарай..", start_d)

// ------------------------
let forest = new LocationEvent("Лес", "Вонючий лес")



await barn.start()