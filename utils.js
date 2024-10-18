import { settings } from './config.js';
import readline from 'readline';

function printHelper(text, speed, newline, resolve) {
    if (!text.length) {
        if (newline) {
            process.stdout.write('\n')
        }
        resolve()
        return
    }
    
    const chars = text.split('')
    const head = chars[0]
    const tail = text.slice(1)
    setTimeout(() => {
        process.stdout.write(head)
        printHelper(tail, speed, newline, resolve)
    }, speed ?? settings.charPrintTime)
}

export async function printLine(text, speed, newline = true) {
    return new Promise((resolve) => {
        printHelper(text, speed, newline, resolve)
    })
}


export function askQuestion(question, speed, newline = true) {
    return new Promise(async (resolve) => {
        await printLine(question, speed, newline)
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('', (answer) => {
            rl.close()
            resolve(answer)
        });
    })
};

