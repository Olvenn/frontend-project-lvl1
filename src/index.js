import readlineSync from 'readline-sync';
import { checkOddOrEven, getRandomNumber } from  './utils.js';

const game = (gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name ');
  console.log(`Hello, ${name}!`);

  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const question = (randomNumber) => 'Question: ' + randomNumber;
	  
  const requestResponse = 'Your answer: ';
  const correct = 'Correct!';
	    
  const numberOfMoves = 3;
	  	
  for (let i = 0; i < numberOfMoves; i += 1) {
    const [rule, question, correctAnswer] = gameData;
    const number = getRandomNumber(1, 100);
    console.log(question(number));
    const answer = readlineSync.question(requestResponse);
    const isEven = answer === 'yes' ? true : false;
    const correctAnswer = answer === 'yes' ? 'no' : 'yes';
		      
     if(isEven === checkOddOrEven(number)) {
       console.log(correct);
     } else {

  (return console.lo g(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${name}!`);
      }	  
   };
  return console.log(`Congratulations, ${name}!`);
};

export default game;

