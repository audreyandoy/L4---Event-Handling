//get HTML canvas
var canvasObject = document.getElementById("game");
var canvas = canvasObject.getContext("2d");

// get event listeners
document.addEventListener("keydown", keyDownHandler, false)

document.addEventListener("keyup", keyUpHandler, false)

var cPressed;
var sPressed;
var ePressed;
var tPressed;
var rPressed;


function keyDownHandler(e) {
    if (e.keyCode == 67) { // c key pressed
       cPressed = true; 
    }
    else if (e.keyCode == 69) { // e key pressed
       ePressed = true; 
    }
    else if (e.keyCode == 83) { // s key pressed
       sPressed = true; 
    }
    else if (e.keyCode == 84) { // t key pressed
       tPressed = true; 
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 67) { // c key pressed
        cPressed = false;
    }
    else if (e.keyCode == 69) { // c key pressed
       ePressed = false; 
    }
    else if (s.keyCode == 83) { // c key pressed
       sPressed = true; 
    }
    else if (e.keyCode == 84) { // t key pressed
       tPressed = false; 
    }
}