'use strict';
const assert = require('assert');
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// make array's for catagories food, movies, ,countries

// to show alphabet on html
let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
let alphabetContainer = document.getElementById('alphabetContainer')
for (let i = 0; i < alphabet.length; i++){
  let letterElements = document.createElement('div')
  letterElements.setAttribute('id', alphabet[i])
  letterElements.classList.add('letter')
  letterElements.innerText = alphabet[i]
  alphabetContainer.append(letterElements)
} 
// new array with random word generated
let foodWords = [
  'almond', 'hotdog', 'garlic', 'lentil','tamale', 'banana', 'waffle', 'butter', 'hummus'
]

let foodWord = foodWords[Math.floor(Math.random() * foodWords.length)];
// console.log(foodWord)
// This will show the length of the word "_" with an empty letter
let emptyWord = []
for(let i = 0; i <foodWord.length; i++){
  emptyWord.push('          _         ')
}
let solution = document.getElementById('solutions')
let newSolution = foodWord.split('')
solution.innerText = emptyWord
emptyWord[3] = 'x'
// console.log(newSolution)

let showLives = document.getElementById("myLives");
showLives.textContent = "my lives"

// need to make hints function
// need reset function 
// 
getPrompt()


// ----------- test ----------- ----------- test ----------- ----------- test ----------- ----------- test -----------
const getPrompt = () => {
      rl.question('word', (answer) => {
        console.log(answer);
        getPrompt();
      });
    }


if (typeof describe === 'function'){
    // describe('BankAccount', function(){
    //     it("Should have an account number, owner's name and a transaction list", function(){
    //         const bankAccount1 = new BankAccount('1234567', 'Michael H.'); 
    //         assert.equal(bankAccount1.accountNumber, '1234567');
    //         assert.equal(bankAccount1.owner, 'Michael H.')
    //         assert.equal(bankAccount1.transactions.length, 0)
    //         assert.equal(bankAccount1.balance(), 0)
    //     })
    // })
    describe('hangMan', function(){
        it('should add 2 nums', function(){
            assert.equal(hangMan(), 3)
        })
    })


}else {
      getPrompt();
}