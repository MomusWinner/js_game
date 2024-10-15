import {player} from './player.js';

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout 
});

const askQuestion = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};


console.log(player)