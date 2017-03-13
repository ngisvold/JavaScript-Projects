var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	//Mode Buttons Event Lister
	for (var i = 0; i < modeButtons.length; i++) {
 		modeButtons[i].addEventListener("click", function(){
 			modeButtons[0].classList.remove("selected");
 			modeButtons[1].classList.remove("selected");
 			this.classList.add("selected");
			this.textContent ==="Easy" ? numSquares = 3: numSquares = 6;
			reset();
 		});
	}

}

function setupSquares(){
	for(var i =0; i < squares.length; i++){
		//add click listener to each square
		squares[i].addEventListener("click", function(){
			//get color of clicked square
			var clickedColor = this.style.background;
			//compare to pickedColor
			if(clickedColor=== pickedColor){
				msgDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				chgColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				//Wrong colors go to background
				this.style.background = '#232323';
				msgDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
		//generate new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"

	msgDisplay.textContent="";
	//change colors of squares
	for(var i =0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = 'steelblue';
}

resetButton.addEventListener("click", function(){
	reset();
})

function chgColors(colors){
	//loop through squares
	for(var i =0; i < squares.length; i++){
		//Chnage each color to match given color
		squares[i].style.background = colors;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = []

	//add num random colors to array
	for(var i=0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	var red = Math.floor(Math.random() * 256);

	//pick a "green" from 0 to 255
	var green = Math.floor(Math.random() * 256);

	//pick a "blue" from 0 to 255
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}