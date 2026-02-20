console.log("Hey there!");


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

let boxesPerSide = 10;

let canvasSize = 400;
let boxSize = 100;

function resizeCanvas(canvas, boxNumber) {
    boxSize = Math.floor(canvasSize / boxNumber);
    canvasSize = boxNumber * boxSize;
    canvas.setAttribute("style", 
        `height: ${canvasSize}px; 
         width: ${canvasSize}px`)
    fillCanvas(canvas, boxNumber);
}

const container = document.querySelector(".canvas");
resizeCanvas(container, boxesPerSide);

function fillCanvas(canvas, boxNumber) {
    for (let i = 0; i < boxNumber ** 2; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("style", 
            `height: ${boxSize}px; 
             width: ${boxSize}px`);
        canvas.appendChild(box);
    }
}

