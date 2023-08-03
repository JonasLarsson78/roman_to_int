import chalk from 'chalk';
import { roman } from './roman.js'
const error = 'Fel - Inte en sträng med Romerska siffror.'

export const romanToInt = (s) => {
  const S = s.toUpperCase()

  let value = 0
  for (let i = 0; i < s.length; i++) {
    roman[S[i]] < roman[S[i + 1]]
      ? (value -= roman[S[i]])
      : (value += roman[S[i]])
  }
  if (!isNaN(value)) {
    return 'Romerskt tal: ' + chalk.green(S) + ' => ' + 'Tal: ' + chalk.blueBright.bold.underline(value)
  } else {
    return chalk.red(error)
  }
}