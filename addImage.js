import { gamePeices } from "./const.js"

export function addImage(){
    let image = document.getElementById('image')
    image.src = gamePeices.pop()
}