import { hangMan, guessArray } from "./index.js"

// import { randomWordArry } from "./const.js";
let alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

let solution = document.getElementById('solutions')

export let alphabetContainer = document.getElementById('alphabetContainer')
for (let i = 0; i < alphabet.length; i++){
    let letterElements = document.createElement('div')
    letterElements.setAttribute('id', alphabet[i])
    letterElements.classList.add('letter')
    letterElements.innerText = alphabet[i]
    letterElements.addEventListener('click', (event) => {
        console.log(event.target.id)
        hangMan(event.target.id)
        solution.innerText = guessArray.join(' ')
    })
    


    alphabetContainer.append(letterElements)
} 

export function reset(){
    document.getElementById("myForm").reset();
    location.reload()
  } 