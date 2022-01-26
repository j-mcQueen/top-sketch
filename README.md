# top-sketch

This project was developed as part of The Odin Project's Foundations course. Check out my [live version](https://silverwish.github.io/top-sketch/) of the toy.

## new things i've learned

- how to use setAttribute to create clean code when applying multiple styles to an element in JS
- how to use arrow functions to remove code litter from the consistent use of function()
- how to take advantage of changes in an input element's value using the input event listener
- the importance of the local and global scope

## biggest challenges

- building the slider function which changes the dimensions of the grid
- understanding how the toy container box shadow works to create it's effect

## technologies used

- HTML
- CSS
- JS

## unresolved issues

- ### How greyscale color is applied

    -  #### how the code currently works

        - when the greyscale button is clicked, variables for r, g and b are set. A loop then runs on the squares which listens for mouseover events. On event occurrence, a background color for the square is set using the rgb variable values defined previously. Additionally, 0.6 is removed from the value of r, g and b. This means that every time a mouseover event occurs, the rgb value (which applies to all squares) steadily decreases, making each square progressively darker on mouseover.

    - #### how do i want my code to work?

        - I want a square's local rgb value to decrease on mouseover, unaffecting other square's rgb values until they themselves are hovered by the mouse.

    - #### attempted solutions

        - Tried using e.currentTarget.style.backgroundColor = "..." to change the background color of the individual square on which the event fired, but it seems to be functionally equivalent to the variable 'square'

## notes

- this project assumes the viewer's browser is updated enough to support range input types