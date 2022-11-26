var counterElement = document.getElementById('counter');
var incrementBtn = document.getElementById('increment');
var decrementBtn = document.getElementById('decrement');
var clearBtn = document.getElementById('clear');
var alertText = document.getElementById('alert-text');

var counter = counterElement.innerText;

function increment(){
    if( counter >= 0){
        alertText.innerText = '';
    }
    counter++;
    counterElement.innerText = counter;
}
function decrement(){
    if(counter <= 0){
       
        alertText.innerText = 'Error: Cannot go below 0';

    }else{
    counter--;
    counterElement.innerText = counter;
}
}
function clear(){
    counter = 0;
    counterElement.innerText = counter;
}
incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;
clearBtn.onclick = clear;




