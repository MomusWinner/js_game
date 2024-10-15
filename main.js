import {player} from './player.js';
import {Location} from './location.js';
import {Choice, ChoiceEvent} from './event.js';


let choice1 = new Choice("choice1", () => {console.log("response  1");})
let choice_event = new ChoiceEvent([choice1])

let forest = new Location("Лес", "Лес..", choice_event)

await forest.start()