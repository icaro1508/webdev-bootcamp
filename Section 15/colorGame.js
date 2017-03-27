/*jshint browser:true */

//Variable Declaration
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetBtn");
var modeButtons = document.querySelectorAll(".mode");

init();


resetButton.addEventListener("click", function () {
    reset();
});



function init() {
    //Mode buttons Event Listener
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i += 1) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }

}

function setupSquares() {
    for (var i = 0; i < squares.length; i += 1) {
        //add initial colors to the squares.
        squares[i].style.background = colors[i];
        //adding click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of square and compare it to pickedColor
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                h1.style.background = clickedColor;
                changeColors(clickedColor);
                resetButton.textContent = "Play Again?";
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function changeColors(colorString) {
    //loop through all squares and change each color to match give color
    for (var i = 0; i < squares.length; i += 1) {
        squares[i].style.background = colorString;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(numberOfColors) {
    //make array
    var arr = [];
    //add numberOfRandomColors to array
    for (var i = 0; i < numberOfColors; i += 1) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    var redValue = Math.floor(Math.random() * 256);
    var greenValue = Math.floor(Math.random() * 256);
    var blueValue = Math.floor(Math.random() * 256);
    return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";

}

function reset() {
    h1.style.background = "steelblue";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i += 1) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}
