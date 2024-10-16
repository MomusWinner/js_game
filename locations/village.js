import { player } from '../characters/player.js';
import { LocationEvent } from '../events/location.js';
import { DialogEvent, PhraseEvent } from '../events/dialog.js'
import { Person } from '../characters/person.js';
import { Attack } from '../characters/enemy.js';
import { narrator } from '../characters/characters.js';
import { kingdom } from './kingdom.js'

const grandfather = new Person("Дедушка", 10)
const sword = new Attack("Меч", 20)
const villageDialog = new DialogEvent([
    new PhraseEvent(grandfather, "Привет, путник. Ты что под кайфом?"),
    new PhraseEvent(player, "Я не под кайфом, я просто счастлив."),
    new PhraseEvent(grandfather, "Ну ладноооо. Оккккк. Держи меч"),
    { start: async () => { await player.grabAttack(sword) } },
    new PhraseEvent(player, "С кайфом"),
    new PhraseEvent(grandfather, "Теперь тебе нужно победить злого короля, так как этот чёрт поднял налоги на 20%."),
    new PhraseEvent(player, "Какой он злой. Его нужно одолеть."),
    new PhraseEvent(narrator, "Путник был очень зол на злого короля.Решил во что бы то ни стало победить его, отправившись в королевство."),
    kingdom
])

export const village = new LocationEvent("Деревня", "Вонючая деревня", villageDialog)
