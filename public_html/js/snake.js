var snake;

var context;
var screenWidth;
var screenHeight;

function gameInitialize() {
    var canvas = document.getElemntById ("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
}   screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.Height = screenHeight;
} 

function gameLoop () {  
}

function gameDraw () {
    context.fillStyle = "rgb(180,250,213)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}