var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}

});

resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i =0; i < squares.length; i++){
			//Chnage each color to match given color
			squares[i].style.background = colors[i];
		}
		h1.style.background = '#232323';
});

colorDisplay.textContent = pickedColor;

for(var i =0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

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