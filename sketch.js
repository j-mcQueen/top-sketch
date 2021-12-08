// createSquares will need an update as a range counter for the slider is implemented

let createSquares = function() {
    let squareBox = document.querySelector(".squares-cntr");
    squareBox.style.gridTemplateColumns = "repeat(16, auto)";
    
    for (let i = 0; i < 256; i++) {
        let newSquare = document.createElement("div");
        newSquare.className = "square";
        squareBox.appendChild(newSquare);
    }
}

createSquares();

let square = document.querySelector(".square");
let squares = document.querySelectorAll(".square");

squares.forEach(square => square.addEventListener("mouseover", () => {
    square.setAttribute("style", "transform: scale(1.3); transition: 0.1s");
}));

squares.forEach(square => square.addEventListener("mouseout", () => {
    square.style.transform = "none";
}));

let btnCntr = document.querySelector(".btns-cntr");
let btns = btnCntr.childNodes;

btns.forEach(btn => btn.addEventListener("mouseover", () => {
    btn.setAttribute("style", "transform: scale(0.9); transition: 0.2s");
}));

btns.forEach(btn => btn.addEventListener("mouseout", () => {
    btn.setAttribute("style", "transform: none; transition: 0.2s");
}));

let black = document.querySelector("#black");
let greyscale = document.querySelector("#greyscale");
let reset = document.querySelector("#reset");

let blackSquares = function() {
    squares.forEach(square => square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "rgb(60, 60, 60)";
    }));
}

black.addEventListener("click", blackSquares);

// darker squares problem

// - how the code currently works
 
//  when the greyscale button is clicked, variables for r, g and b are set. A loop then runs on the squares which listens for mouseover events. On event occurrence, a background color for the square is set using the rgb variable values defined previously. Additionally, 0.6 is removed from the value of r, g and b. This means that every time a mouseover event occurs, the rgb value (which applies to all squares) steadily decreases, making each square progressively darker on mouseover.
 
//  - how do i want my code to work?
 
//  I want a square's local rgb value to decrease on mouseover, unaffecting other square's rgb values until they themselves are hovered by the mouse.
 
//  - possible solutions
 
//  Tried using e.currentTarget.style.backgroundColor = "..." to change the background color of the individual square on which the event fired, but it seems to be functionally equivalent to the variable 'square'

let darkerSquares = function() {
    let r = 240;
    let g = 240;
    let b = 240;

    squares.forEach(square => square.addEventListener("mouseover", () => {
        r -= 0.6;
        g -= 0.6;
        b -= 0.6;

        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }));
}

greyscale.addEventListener("click", darkerSquares);

let resetSquares = function() {
    squares.forEach(square => square.style.backgroundColor = "white");
}

reset.addEventListener("click", () => { 
    resetSquares();

    squares.forEach(square => square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "white";
    }));
});

// create a loop
// after each mouseover, add 5% more black to the background color

let footer = document.querySelector("footer p");

let showFooter = function() {
    footer.setAttribute("style", "transform: translateY(5px); transition: 0.3s");
}

let hideFooter = function() {
    footer.setAttribute("style", "transform: translateY(45px); transition: 0.3s");
}

footer.addEventListener("mouseover", showFooter);
footer.addEventListener("mouseout", hideFooter);

// you might have to specify the size of the squares in javascript for all dimension options

// create a function which handles the random color hover effect
// call the function on hover

// If btn is clicked, then mouse hover changes the background colour of the squares
// mouseover event listener inside a click event listener?