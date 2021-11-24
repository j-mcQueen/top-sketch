let squareBox = document.querySelector(".squares-cntr");
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


let btn = document.querySelector(".btns-cntr button");
let btns = document.querySelectorAll(".btns-cntr button");

btns.forEach(btn => btn.addEventListener("mouseover", function() {
    btn.style.transform = "scale(0.9)";
    btn.style.transition = "0.2s";
}));

btns.forEach(btn => btn.addEventListener("mouseout", function() {
    btn.style.transform = "none";
    btn.style.transition = "0.2s";
}));

let black = document.querySelector("#black");
let grayscale = document.querySelector("#greyscale");
let reset = document.querySelector("#reset");

let blackSquares = function() {
    squares.forEach(square => square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "rgb(60, 60, 60)";
    }));
}

black.addEventListener("click", blackSquares);

let darkerSquares = function() {
    let r = 240;
    let g = 240;
    let b = 240;

    squares.forEach(square => square.addEventListener("mouseover", function() {
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        r -= 0.6;
        g -= 0.6;
        b -= 0.6;
    }));
}

greyscale.addEventListener("click", darkerSquares);

let resetSquares = function() {
    squares.forEach(square => square.style.backgroundColor = "white");
}

reset.addEventListener("click", function() { 
    resetSquares();

    squares.forEach(square => square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "white";
    }));
});

// create a loop
// after each mouseover, add 5% more black to the background color

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

// If btn is clicked, then mouse hover changes the background colour of the squares
// mouseover event listener inside a click event listener?