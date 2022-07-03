
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

function randomWorld() {
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    let word = ranObj.word;
    console.log(word);
    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}
randomWorld();
// console.log("sukhman");

resetBtn.addEventListener("click",randomWorld);