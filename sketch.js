let squareBox = document.querySelector("#squares-container");
squareBox.style.gridTemplateColumns = "repeat(16, auto)";

for (let i = 0; i < 256; i++) {
    let newSquare = document.createElement("div");
    newSquare.className = "square";
    squareBox.appendChild(newSquare);
}

let square = document.querySelector(".square");
let squares = document.querySelectorAll(".square");

squares.forEach(square => square.addEventListener("mouseover", function() {
    square.style.transform = "scale(1.3)";
    square.style.transition = "0.1s";
}));

squares.forEach(square => square.addEventListener("mouseout", function() {
    square.style.transform = "none";
}));


let button = document.querySelector("#buttons-container button");
let buttons = document.querySelectorAll("#buttons-container button");

buttons.forEach(button => button.addEventListener("mouseover", function() {
    button.style.transform = "scale(0.9)";
    button.style.transition = "0.2s";
}));

buttons.forEach(button => button.addEventListener("mouseout", function() {
    button.style.transform = "none";
    button.style.transition = "0.2s";
}));

let black = document.querySelector("#black");
let reset = document.querySelector("#reset");

let blackSquares = function() {
    squares.forEach(square => square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "black";
    }));
}

// click black square button
// toggle class of black square
// if class = black square, make the background color of the square black on mouseover
// if class =/= black square, make the background color of the square white on mouseover

black.addEventListener("click", blackSquares);

let resetSquares = function() {
    squares.forEach(square => square.style.backgroundColor = "white");
}

reset.addEventListener("click", function() { 
    resetSquares();
    
    squares.forEach(square => square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "white";
    }));
});

let footer = document.querySelector("footer p");

let showFooter = function() {
    footer.style.transform = "translateY(0)";
    footer.style.transition = "0.3s";
}

let hideFooter = function() {
    footer.style.transform = "translateY(45px)";
    footer.style.transition = "0.3s";
}

footer.addEventListener("mouseover", showFooter);
footer.addEventListener("mouseout", hideFooter);

// you might have to specify the size of the squares in javascript for all dimension options

// create a function which handles the random color hover effect
// call the function on hover

// If button is clicked, then mouse hover changes the background colour of the squares
// mouseover event listener inside a click event listener?