//Bootcamp Impulso JavaScript Evolution
/*
Autor:Alex Ferreira
*/
var currrentNumberWrapper = document.getElementById("currentNumber");
var currrentNumber = 0;

function increment(){
    currrentNumber = currrentNumber + 1;
    currrentNumberWrapper.innerHTML = currrentNumber;
}
function decrement(){
    currrentNumber = currrentNumber - 1;
    currrentNumberWrapper.innerHTML = currrentNumber;
}


