alert("CONNECTED!");

var button1 = document.getElementsByTagName("button")[0];
var button2 = document.getElementsByTagName("button")[1];
var button3 = document.getElementsByTagName("button")[2];
var p1 = document.getElementById("p1display");
var p2 = document.getElementById("p2display");
var num = document.querySelector("input");
var p = document.getElementsByTagName("p")[0];
var scorep = document.querySelector("p span");
var score1 = 0;
var score2 = 0;
var playingto = 5;


button1.addEventListener("click",function(){
	if(score1 != playingto && score2 != playingto){
		score1++;
		p1.textContent = score1;
		
	}
	if(score1 === playingto){
		p1.classList.add("winner");
	}
	

});

button2.addEventListener("click",function(){
	if(score1 != playingto && score2 != playingto){
		score2++;
		p2.textContent = score2;

	}
	if(score2 === playingto){
		p2.classList.add("winner");
	}
});

button3.addEventListener("click",function(){
	reset();

});

function reset(){
	score1 = 0;
	score2 = 0;
	p1.textContent = score1;
	p2.textContent = score2;
	p1.classList.remove("winner");
	p2.classList.remove("winner");
}

num.addEventListener("change", function(){
	scorep.textContent = num.value;
	playingto = Number(num.value);
	reset();

});