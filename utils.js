import { settings } from './config.js';
import readline from 'readline';

async function printLine(text) {
    if (!text.length) {
        process.stdout.write('\n')
        return
    }
    
    const chars = text.split('')
    const head = chars[0]
    const tail = text.slice(1)
    setTimeout(() => {
        process.stdout.write(head)
        printLine(tail)
    }, settings.charPrintTime)
}


export function askQuestion(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(question + '\n', (answer) => {
            rl.close()
            resolve(answer)
        });
    })
};

