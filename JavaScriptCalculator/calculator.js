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