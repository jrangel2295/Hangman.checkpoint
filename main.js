"use strict";
// const assert = require("assert"); ---------
import * as assert from "node:assert";
import { Console } from "node:console";
// const readline = require("readline"); ---------
import * as readline from "node:readline";
// use the readline module to print out to the command line

// using ES modules to use the import/export syntax instead of the required syntax.
// package.json has to have "type": "module", to know that we are using ESM syntax.

// using nodemon to have an active node enviorment that will change as the code changes without having
// to kill node and restart over and over.
// package.json has to have  "start": "nodemon main.js" as well as we have to npm i nodemon.
// to be able to use nodemon.
import { randomWordArry, theABC } from "./const.js";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let guess = "";
let solution = [];
let guessArray = [];
let turnCounter = 0;

const newWord = () => {
  let randomNumber = Math.floor(Math.random() * 50);
  solution = randomWordArry[randomNumber].split("");
  // console.log(solution);
  for (let i = 0; i < solution.length; i++) {
    guessArray.push("_");
  }
  console.log(guessArray);
  return solution;
};
newWord();
/*This function newWord(), First sets the variable randomNumber to a number between 0 & 50. 

Second it set the variable solution to = a random index of the randomWordArray passing in the value of
number to = the index. 

It then set the variable guessArray to = the length of the solution Array with _ as temp values for each
index. 
*/

const addLetter = (guess) => {
  solution.map(function (char, i) {
    if (char === guess) {
      guessArray[i] = guess;
      return true;
    } else {
      return false;
    }
  });
  console.log(guessArray);
};
/*This function addLetter(), loops through the solution array checking if each index's character matches 
the guess input. 

If the character matches it will set that same index in the guessArray to the character replacing the
_ temp value.  
 */

const checkForWin = () => {
  if(solution.join('') === guessArray.join('')){
    console.log(`You WIN! The answer was ${solution.join("")}`)
    console.log('New Game!')
    return true
  }
}

const hangMan = (guess) => {
  if (!isNaN(guess)) {
    console.log(typeof guess);
    return console.log("Letters only you heathen!");
  }

  if (guess.length > 1) {
    console.log("One letter at a time");
    return guess;
  }

  if (guess.length < 1) {
    console.log("Please select a letter to guess");
    return guess;
  }

  if (solution.includes(guess)) {
    console.log(`The letter ${guess} is in the solution`);
    addLetter(guess);
    console.log(turnCounter);
    if(checkForWin()){
      turnCounter = 0;
      guessArray = []
      newWord()
    }
    return guess;
  }

  if (!solution.includes(guess) && guess.length >= 1) {
    console.log(`The letter ${guess} is not in the solution`);
    turnCounter++;
    console.log(turnCounter);
    if (turnCounter >= 9) {
      console.log("OUT OF TURNS!");
      console.log(`GAME OVER! The answer was ${solution.join("")}`);
      console.log('New Game!')
      turnCounter = 0;
      guessArray = []
      return newWord()
      //check for win, reset board/give solution if when not meet
    }
    return guess
  }
};
// ----------- test ----------- ----------- test ----------- ----------- test ----------- ----------- test -----------
const getPrompt = () => {
  rl.question("word ", (answer) => {
    console.log(answer);
    hangMan(answer);
    getPrompt();
  });
};

if (typeof describe === "function") {
  // describe('BankAccount', function(){
  //     it("Should have an account number, owner's name and a transaction list", function(){
  //         const bankAccount1 = new BankAccount('1234567', 'Michael H.');
  //         assert.equal(bankAccount1.accountNumber, '1234567');
  //         assert.equal(bankAccount1.owner, 'Michael H.')
  //         assert.equal(bankAccount1.transactions.length, 0)
  //         assert.equal(bankAccount1.balance(), 0)
  //     })
  // })
  //   describe("hangMan", function () {
  //     it("should ", function () {
  //       assert.equal(hangMan(), 3);
  //     });
  //   });

  describe("newWord", function () {
    it("should produce a random word from the randomWordArray", function () {
      assert.equal(typeof (newWord(), "object")); //how to test this if the answer is going to be a random word from the list?
    });
  });
} else {
  getPrompt();
}
