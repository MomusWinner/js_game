import { settings } from './config.js';
import readline from 'readline';

export async function printLine(text, speed) {
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
    }, speed ?? settings.charPrintTime)
}


export function askQuestion(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        printLine(question)
        rl.question('', (answer) => {
            rl.close()
            resolve(answer)
        });
    })
};

