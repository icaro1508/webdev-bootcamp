//Variable Declaration.
var p1Button = document.getElementById("p1");
var p1Score = 0;
var p1Display = document.getElementById("player-1-score");
var p2Button = document.getElementById("p2");
var p2Score = 0;
var p2Display = document.getElementById("player-2-score");
var resetButton = document.getElementById("reset");
var winningScore =  5;
var numInput = document.querySelector("input[type='number']");
var gameOver = false;

//Setting the input field and the score limit lable on runtime.
document.getElementById("playing-to").textContent = winningScore;
numInput.value = winningScore;


//Functio used to increase the score of a player, pass the variable that represents the numeric player score and the clas for the HTML Display text in the webpage.
function increaseScore(playerScore, textToChangeClass) {
    "use strict";
    if (!gameOver) {
        playerScore += 1;
        if (playerScore === winningScore) {
            gameOver = true;
            textToChangeClass.classList.add("winner");
        }
        textToChangeClass.textContent = playerScore;
    }
    return playerScore;
}

function resetGame() {
    "use strict";
    p1Score = 0;
    p2Score = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    document.querySelectorAll("h1 span")[0].textContent = 0;
    document.querySelectorAll("h1 span")[1].textContent = 0;
    gameOver = false;
}

//Listeners for the Button actions.
p1Button.addEventListener("click", function () {
    "use strict";
    p1Score = increaseScore(p1Score, p1Display);
});


p2Button.addEventListener("click", function () {
    "use strict";
    p2Score = increaseScore(p2Score, p2Display);
});

resetButton.addEventListener("click", function () {
    "use strict";
    resetGame();
});

//Listeners for the Input Fields actions.
numInput.addEventListener("change", function () {
    "use strict";
    document.querySelector("p").textContent = "Playing to:" + numInput.value;
    winningScore = Number(numInput.value);
    resetGame();
});