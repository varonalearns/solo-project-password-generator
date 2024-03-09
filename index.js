const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let generatePW = document.getElementById("generate-pw")

// Generates random passwords when Generate Password button is clicked
generatePW.addEventListener("click", function() {
    let randOne = ""
    let randTwo = ""
    for(let i = 1; i < 16; i++) {
        let randIndex = Math.floor(Math.random() * characters.length)
        randOne += characters[randIndex]
    }
    passwordOne.textContent = randOne

    for(let i = 1; i < 16; i++) {
        let randIndex = Math.floor(Math.random() * characters.length)
        randTwo += characters[randIndex]
    }
    passwordTwo.textContent = randTwo
} )