import { player } from '../characters/player.js';
import { LocationEvent } from '../events/location.js';
import { DialogEvent, PhraseEvent } from '../events/dialog.js'
import { Person } from '../characters/person.js';
import { Attack } from '../characters/enemy.js';
import { narrator } from '../characters/characters.js';
import { pub } from './pub.js'

export const kingdom = new LocationEvent("Королевство", "Вонючее королевство", new DialogEvent([
    new PhraseEvent(narrator, "После изнурительной дороги путник очень устал. Он решил направится в ближайший паб."),
    pub
]))
