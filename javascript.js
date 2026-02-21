console.log("Hey there!");


const hardLimit = 100;
const maxCanvasSize = 400;
let boxSize = 100;

const body = document.querySelector("body");

const resizeButton = document.querySelector("button.resize");
resizeButton.addEventListener("click", () => {
    promptSize(document.querySelector(".canvas"));
});

function resizeCanvas(oldCanvas, boxNumber) {
    canvas = oldCanvas.cloneNode(false);
    oldCanvas.remove();

    boxSize = maxCanvasSize / boxNumber;
    canvasSize = boxNumber * boxSize;
    canvas.setAttribute("style", 
        `height: ${canvasSize}px; 
         width: ${canvasSize}px`);
    fillCanvas(canvas, boxNumber);
}

function fillCanvas(canvas, boxNumber) {
    for (let i = 0; i < boxNumber ** 2; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("style", 
            `height: ${boxSize}px; 
             width: ${boxSize}px`);
        canvas.appendChild(box);
    }
    activateCanvas(canvas);
}

function activateCanvas(canvas) {
    canvas.addEventListener("mouseover", (e) => {
        let box = e.target;
        if (box.className === "box") {
            box.classList.replace("box", "box-filled");
        }
    })
    body.appendChild(canvas);
}

function promptSize(oldCanvas) {
    let userInput = +prompt("Number of boxes per side?");
    if (isNaN(userInput)) {
        alert("Please enter a number!");
        return false;
    }
    else if (userInput < 1) {
        alert("How will you draw with no boxes?!");
        return false;
    }
    else if (userInput > hardLimit) {
        alert("Too many! I don't want you to crash!");
        return false;
    }
    else {
        resizeCanvas(oldCanvas, userInput);
        return true;
    }
}


function startCanvas() {
    const container = document.querySelector(".canvas");
    let reprompt = promptSize(container)
    while (!reprompt) {
        reprompt = promptSize(container);
    }
}

startCanvas();


/*
Goal: resize container and boxes so that they
can contain the dimensions the user provides
without having the container undergo drastic resizing

1) decide a base canvas size e.g. 800px (square)
2) ask user for an number of boxes per side e.g. 4
3) if canvas / box number != 0 (not a perfect fit)
    floor canvas/number = box size
    multiply number * box size -> new canvas size
    set canvas size to new canvas size
4) deploy container and boxes

EDIT: Step 3 is flawed. Change to:
3) apply the resizing operation regardless
*/

/*
Goal: hover effects over each square so that each div
may change color as the mouse flies by

1) add an event listener to each box individually 
on mouseover (specifically mouseenter) events
2) change the color of each box as the event is triggered

Instead of adding listeners to each box, adding one listener
to the entire container should work, right?
*/

/*
Goal: refresh canvas

1) clone the old canvas without children
2) delete the old canvas
3) add listener to new canvas
*/