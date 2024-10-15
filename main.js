import { player } from './characters/player.js';
import {Location} from './location.js';
import {Choice, ChoiceEvent} from './event.js';
import {DialogEvent, PhraseEvent} from './dialog.js'
import { Person } from './characters/person.js';

let choice1 = new Choice("choice1", () => {console.log("response  1");})
let choice_event = new ChoiceEvent([choice1])

let forest = new Location("Лес", "Лес..", choice_event)


let ashot = new Person("Ashot", 1000)


let phrases = [
  new PhraseEvent(player, "Hello"),
  new PhraseEvent(ashot, "a.."),
  new PhraseEvent(player, "a"),
  new PhraseEvent(ashot, "o.."),
]

let dial = new DialogEvent(phrases)

await phrases[0].start()
await phrases[1].start()
// await dial.start()
// await forest.start()