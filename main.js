import {LocationEvent} from './events/location.js';
import { barn } from './locations/barn.js'
import { village } from './locations/village.js'

// ------------------------
let forest = new LocationEvent("Лес", "Вонючий лес")

// ------------------------

await village.start()
