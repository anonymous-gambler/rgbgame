var numOfSquares=6;
var colors=randomColors(numOfSquares);

var squares=document.querySelectorAll(".square");

var pickedColor=pickColors();
var colorDisplay=document.querySelector("#colorDisplay");

var messageDisplay=document.querySelector("#message");

var h1=document.querySelector("h1");


var resetButton=document.querySelector("#reset");

var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numOfSquares=3;


	colors=randomColors(numOfSquares);
	pickedColor=pickColors();
	colorDisplay.textContent=pickedColor;
	
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}


	for(var i=3; i<squares.length; i++){
		document.querySelectorAll(".square")[i].style.display="none";
	}


	h1.style.backgroundColor="steelblue";
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";


	numOfSquares=3;
});


hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquares=6;


	colors=randomColors(numOfSquares);
	pickedColor=pickColors();
	colorDisplay.textContent=pickedColor;

	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}


	for(var i=3; i<squares.length; i++){
		document.querySelectorAll(".square")[i].style.display="block";
	}


	h1.style.backgroundColor="steelblue";
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";


	numOfSquares=6;
});



resetButton.addEventListener("click", function(){
	colors=randomColors(numOfSquares);
	pickedColor=pickColors();

	colorDisplay.textContent=pickedColor;

	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}


	h1.style.backgroundColor="steelblue";
	this.textContent="New Colors";
	messageDisplay.textContent="";

});


colorDisplay.textContent=pickedColor;


for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colors[i];
	
	squares[i].addEventListener("click", function(){
		
		var clickedColor=this.style.backgroundColor;

		if(clickedColor === pickedColor){
			messageDisplay.textContent="Correct!";
			changeColors(pickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?";

		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again!";
		}
	});
};


function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColors(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function randomColors(num){
	var arr=[];

	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	
	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
