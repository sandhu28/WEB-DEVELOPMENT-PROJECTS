
const wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "plannet of our solar system"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "badminton",
        hint: "a sport"
    }
]

const inputs = document.querySelector(".inputs");
resetBtn= document.querySelector(".reset-btn");
hint= document.querySelector(".hint span");
typingInput =document.querySelector(".typing-input");
wrongLetter = document.querySelector(".wrong-letter span")
remGuesses= document.querySelector(".guess-left span")

let word, maxGuesses,incorrects=[], corrects=[];

function randomWorld() {
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
    maxGuesses = 8;incorrects=[], corrects=[];
    // console.log(word);

    remGuesses.innerText = maxGuesses;
    hint.innerText = ranObj.hint;
    wrongLetter.innerText= incorrects;
    
    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}
// randomWorld();
// console.log("sukhman");

function initGame(e){
    let key= e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`) && !corrects.includes(` ${key}`)){
        // console.log(key);
        if(word.includes(key)){
            for (let i = 0; i < word.length; i++) {
                if(word[i]===key){
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value= key;
                }
            }
            console.log("letter found");
        }
        else{
            maxGuesses--;
            incorrects.push(` ${key}`);
        }
        remGuesses.innerText = maxGuesses;
        wrongLetter.innerText= incorrects;
    }
    typingInput.value= "";

    setTimeout(() => {
        if(corrects.length === word.length){
            alert(`Congrats> You found the word ${word.toUpperCase()}`);
            randomWorld();
        }
    
        else if(maxGuesses <1){
            alert("Gamer over! You don't have remaining guesses");
            for(let i=0;i<word.length;i++){
                inputs.querySelectorAll("input")[i].value= word[i];
            }
        }
    });
}

resetBtn.addEventListener("click",randomWorld);
typingInput.addEventListener("input",initGame);
inputs.addEventListener("click",() => typingInput.focus());
document.addEventListener("keydown",() => typingInput.focus());