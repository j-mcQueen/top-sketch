let createSquares = (dimension) => {
    let squareBox = document.querySelector(".squares-cntr");
    squareBox.style.gridTemplateColumns = `repeat(${dimension}, auto)`;
    
    for (let i = 0; i < (dimension*dimension); i++) {
        let newSquare = document.createElement("div");
        newSquare.className = "square";
        squareBox.appendChild(newSquare);
    }

    let square = document.querySelector(".square");
    let squares = document.querySelectorAll(".square");

    let squareTransitions = () => {
        squares.forEach(square => square.addEventListener("mouseover", () => {
            square.setAttribute("style", "transform: scale(1.3); transition: 0.1s");
        }));
        
        squares.forEach(square => square.addEventListener("mouseout", () => {
            square.style.transform = "none";
        }));
    }

    squareTransitions();

    let blackSquares = () => {
        let blackBtn = document.getElementById("black");
    
        let setBlack = () => {
            squares.forEach(square => square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "rgb(60, 60, 60)";
            }));
        }
        
        blackBtn.addEventListener("click", setBlack);
    }
    
    blackSquares();

    let greyscaleSquares = () => {
        let greyscaleBtn = document.getElementById("greyscale");
    
        let addBlack = () => {
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
        
        greyscaleBtn.addEventListener("click", addBlack);
    };
    
    greyscaleSquares();

    let chooseColor = () => {
        let colorPickerBtn = document.getElementById("picker");
    
        let setColor = () => {
            squares.forEach(square => square.addEventListener("mouseover", () => {
                square.style.backgroundColor = colorPickerBtn.value;
            }));
        }
        
        colorPickerBtn.addEventListener("click", setColor);
    }
    
    chooseColor();

    let randomRgb = () => {
        let randomColorBtn = document.getElementById("random");
    
        let setRandom = () => {
        
            squares.forEach(square => square.addEventListener("mouseover", () => {
                let randomInt = (min, max) => {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                }
    
                square.style.backgroundColor = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
            }));
        }
    
        randomColorBtn.addEventListener("click", setRandom);
    }
    
    randomRgb();
    
    let clearSquares = () => {
        let resetBtn = document.getElementById("reset");
    
        let resetSquares = () => {
            squares.forEach(square => square.style.backgroundColor = "white");
        }
        
        resetBtn.addEventListener("click", resetSquares); 
    }
    
    clearSquares();
}

window.addEventListener("load", createSquares(16));

let removeSquares = () => {
    let squareCntr = document.querySelector(".squares-cntr");

    if (squareCntr.hasChildNodes()) {
        let allSquares = document.getElementsByClassName("square");

        while (allSquares.length > 0) {
            squareCntr.removeChild(allSquares[0]);
        }
    }
}

let slider = document.getElementById("dimensions");
let sliderPara = document.querySelector(".slider-value p");
let sliderDefault = slider.getAttribute("value");

sliderPara.textContent = sliderDefault;

slider.addEventListener("input", (e) => {
    let sliderValue = e.currentTarget.value;
    sliderPara.textContent = sliderValue;

    removeSquares(); // remove the previous grid
    createSquares(sliderValue);
});

let buttonTransitions = () => {
    let btnCntr = document.querySelector(".btns-cntr");
    let btns = btnCntr.childNodes;
    
    btns.forEach(btn => btn.addEventListener("mouseover", () => {
        btn.setAttribute("style", "transform: scale(0.9); transition: 0.2s");
    }));
    
    btns.forEach(btn => btn.addEventListener("mouseout", () => {
        btn.setAttribute("style", "transform: none; transition: 0.2s");
    }));
}

buttonTransitions();

let displayFooter = () => {
    let footer = document.querySelector("footer p");

    let showFooter = () => {
        footer.setAttribute("style", "transform: translateY(5px); transition: 0.3s");
    }
    
    let hideFooter = () => {
        footer.setAttribute("style", "transform: translateY(45px); transition: 0.3s");
    }
    
    footer.addEventListener("mouseover", showFooter);
    footer.addEventListener("mouseout", hideFooter);   
}

displayFooter();