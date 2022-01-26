"use strict";
// const assert = require("assert"); ---------
import * as assert from "node:assert";
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

const hangMan = (guess) => {
  console.log(solution);
  if (solution.includes(guess)) {
    console.log("letter is in the solution");
    return guess;
  }
  if (!solution.includes(guess)) {
    console.log("The letter is not in the solution");
    return guess;
  }
};

const newWord = () => {
  let randomNumber = Math.floor(Math.random() * 50);
  solution = randomWordArry[randomNumber].split("");
  console.log(randomNumber);
  console.log(solution);
  console.log(typeof solution);
  return solution;
};
newWord();

const guessWord = (guess) => {
  console.log(guess);
  return guess;
};
// guessWord("a");

// ----------- test ----------- ----------- test ----------- ----------- test ----------- ----------- test -----------
const getPrompt = () => {
  rl.question("word", (answer) => {
    hangMan(answer);
    console.log(answer);
    getPrompt();
  });
};

getPrompt();


// if (typeof describe === "function") {
//   // describe('BankAccount', function(){
//   //     it("Should have an account number, owner's name and a transaction list", function(){
//   //         const bankAccount1 = new BankAccount('1234567', 'Michael H.');
//   //         assert.equal(bankAccount1.accountNumber, '1234567');
//   //         assert.equal(bankAccount1.owner, 'Michael H.')
//   //         assert.equal(bankAccount1.transactions.length, 0)
//   //         assert.equal(bankAccount1.balance(), 0)
//   //     })
//   // })
//   //   describe("hangMan", function () {
//   //     it("should ", function () {
//   //       assert.equal(hangMan(), 3);
//   //     });
//   //   });

//   describe("newWord", function () {
//     it("should produce a random word from the randomWordArray", function () {
//       assert.equal(typeof (newWord(),'object')); //how to test this if the answer is going to be a random word from the list?
//     });
//   });
// } else {
//   getPrompt();
// }
