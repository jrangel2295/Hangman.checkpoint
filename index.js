import { hangMan, guessArray} from "./main.js";
import {alphabetContainer } from './alphabet-btn-functions.js';


let solution = document.getElementById('solutions')

// newWord()

function reset(){
    // document.getElementById("myForm").reset();
    console.log(click)
    location.reload()
  } 
  
  solution.innerText = guessArray.join(' ')
