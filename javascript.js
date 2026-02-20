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

let boxesPerSide = 24;

let canvasSize = 400;
let boxSize = 100;

const container = document.querySelector(".canvas");
resizeCanvas(container, boxesPerSide);

function resizeCanvas(canvas, boxNumber) {
    boxSize = Math.floor(canvasSize / boxNumber);
    canvasSize = boxNumber * boxSize;
    canvas.setAttribute("style", 
        `height: ${canvasSize}px; 
         width: ${canvasSize}px`)
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
}

container.addEventListener("mouseover", (e) => {
    let box = e.target;
    if (box.className === "box") {
        box.classList.replace("box", "box-filled");
    }
})

/*
Goal: hover effects over each square so that each div
may change color as the mouse flies by

1) add an event listener to each box individually 
on mouseover (specifically mouseenter) events
2) change the color of each box as the event is triggered

Instead of adding listeners to each box, adding one listener
to each container should work, right?
*/
