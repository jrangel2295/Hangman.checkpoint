import { alphabetContainer } from "./alphabet-btn-functions.js";
import {randomWordArray } from "./const.js"
import {addImage} from "./addImage.js"
let solutionContainer = document.getElementById("solutions");
// newWord()

function reset() {
  // document.getElementById("myForm").reset();
  console.log(click);
  location.reload();
}

let guess = "";
let solution = [];
export let guessArray = [];
let turnCounter = 0;

const newWord = () => {
  let randomNumber = Math.floor(Math.random() * 50);
  solution = randomWordArray[randomNumber].split("");
  console.log(solution);
  for (let i = 0; i < solution.length; i++) {
    guessArray.push("_");
  }
  console.log("guessarray", guessArray);
  return solution;
};

newWord();
solutionContainer.innerText = guessArray.join(" ");

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

const checkForWin = () => {
  if(solution.join('') === guessArray.join('')){
    console.log(`You WIN! The answer was ${solution.join("")}`)
    console.log('New Game!')
    window.alert("You Win!")
    return true
  }
}

export const hangMan = (guess) => {
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
    if (checkForWin()) {
      turnCounter = 0;
      guessArray = [];
      newWord();
    }
    return guess;
  }


  if (!solution.includes(guess) && guess.length >= 1) {
    console.log(`The letter ${guess} is not in the solution`);
    addImage()
    turnCounter++;
    console.log(turnCounter);
    if (turnCounter >= 9) {
      console.log("OUT OF TURNS!");
      console.log(`GAME OVER! The answer was ${solution.join("")}`);
      console.log('New Game!')
      turnCounter = 0;
      guessArray = []
      window.alert("You Lost!")
      return 

      //check for win, reset board/give solution if when not meet
    }
    return guess
  }
}