# top-sketch

My development repository of a sketchpad/ Etch-A-Sketch hybrid. Choose colour settings and draw pictures with your mouse.

## what i've learned

- how to use setAttribute to create clean code when applying multiple styles to an element in JS
- how to use arrow functions to remove code litter from the consistent use of function()

## biggest challenges

-  building the slider function which changes the dimensions of the grid 

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