import { settings } from './config.js';
import readline from 'readline';

function printHelper(text, speed, resolve) {
    if (!text.length) {
        process.stdout.write('\n')
        resolve()
        return
    }
    
    const chars = text.split('')
    const head = chars[0]
    const tail = text.slice(1)
    setTimeout( () => {
        process.stdout.write(head)
        printHelper(tail, speed, resolve)
    }, speed ?? settings.charPrintTime)
}

export async function printLine(text, speed) {
    return new Promise((resolve) => {
        printHelper(text, speed, resolve)
    })
}


export function askQuestion(question, speed) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        printLine(question, speed)
        rl.question('', (answer) => {
            rl.close()
            resolve(answer)
        });
    })
};

