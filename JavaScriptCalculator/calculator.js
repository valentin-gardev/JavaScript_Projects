const display = document.getElementById('display'); //Getting the element ID from the html file


function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value)// Built in calculator, challange is to create my own functions for the calculations
    }
    catch(error){
        display.value = display.value

    }
}

// Make the calculator as close as possible to the browser one
// What happens when you press 2 times ++, or at the start etc etc