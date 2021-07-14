let squareBox = document.querySelector("#squares-container");

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.className = "square";
    squareBox.appendChild(square);
}

// you might have to specify the size of the squares in javascript for all dimension options

// create a function which handles the random color hover effect
// call the function on hover