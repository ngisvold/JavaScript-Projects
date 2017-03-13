var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg")

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
			chgColors(clickedColor);
		} else {
			//Wrong colors go to background
			this.style.background = '#232323';
			msgDisplay.textContent = "Try Again";
		}

	});

	function chgColors(colors){
		//loop through squares
		for(var i =0; i < squares.length; i++){
			//Chnage each color to match given color
			squares[i].style.background = colors;
		}
	}
}