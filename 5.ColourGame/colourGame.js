var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colordisplay = document.getElementById("colordisplay");
var message = document.querySelector("#message");
var button = document.querySelector("button");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colordisplay.textContent = pickedcolor;

button.addEventListener("click",function(){
	reset();
});

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedcolor = pickColor();
	colordisplay.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
    message.textContent = "Try";
    button.textContent = "NEW COLORS";
    h1.style.backgroundColor = "#steelblue";
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedcolor = pickColor();
	colordisplay.textContent = pickedcolor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";

	}
    message.textContent = "Try";
    button.textContent = "NEW COLORS";
    h1.style.backgroundColor = "steelblue";
});


for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var thiscolor = this.style.backgroundColor;
		if(thiscolor === pickedcolor){
			message.textContent = "Correct";
			changeColors(pickedcolor);
			h1.style.backgroundColor = pickedcolor;
			button.textContent = "PLAY AGAIN?";


		}else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try again";
		}

	});
}

function reset(){
	colors = generateRandomColors(numSquares);
    pickedcolor = pickColor();
    colordisplay.textContent = pickedcolor;
    for(var i = 0; i < squares.length; i++){
    	squares[i].style.backgroundColor = colors[i];
    }
    message.textContent = "Try";
    button.textContent = "NEW COLORS";
    h1.style.backgroundColor = "steelblue";

}
function changeColors(color){
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*numSquares);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr[i] = randomColor();
	}

	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	var randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
	return randomColor;
}