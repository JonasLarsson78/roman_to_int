import { romanToInt } from './misc/roman-to-int.js'
import promptSync from 'prompt-sync';
import chalk from 'chalk';

const prompt = promptSync();
console.log()

let roman = prompt(chalk.yellow('Skriv in ett romerskt tal? ex. MMXXIII '))

console.log()
console.log(romanToInt(roman))
console.log()
