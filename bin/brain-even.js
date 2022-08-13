#!/usr/bin/env node

import { checkOddOrEven } from  '../utils.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name ');

console.log(`Hello, ${name}`);

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

console.log(rule);

const numberOfQuestions = 3;


