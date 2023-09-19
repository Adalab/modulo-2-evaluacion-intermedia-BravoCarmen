"use strict";

// 1. Elementos HTML
const btn = document.querySelector(".js-btn");
const select = document.querySelector(".js-select");
const textResult = document.querySelector(".js-result");
const textResultComputer = document.querySelector(".js-result_computer");


const gamerPoints = document.querySelector(".js-points_gamer");
const computerPoints = document.querySelector(".js-points_computer");



// 2. Funciones y eventos

function getRandomNumber(max) {
    const randomNumber = Math.ceil(Math.random() * max);
    console.log(randomNumber);
    return randomNumber;
   }

function randomMovement(){
    const randomNumber = getRandomNumber(9);
    
    if(randomNumber <= 3){
        textResultComputer.innerHTML = "Piedra";
    }else if(randomNumber <=7){
        textResultComputer.innerHTML = "Papel";
    }else {
        textResultComputer.innerHTML = "Tijera";
    }
    }
  
function compareMovement(){
    const valueGamer = select.value;
    const valueComputer = textResultComputer.innerHTML;
console.log(valueGamer);
console.log(valueComputer);

   if(valueGamer === "Piedra") {
        if (valueComputer === "Piedra"){
        textResult.innerHTML = "Empate";
        }else if(valueComputer === "Papel"){
        textResult.innerHTML = "Perdiste";
        }else {
        textResult.innerHTML = "¡Ganaste!";
    }
   }
     else if(valueGamer === "Papel"){
        if (valueComputer === "Papel"){
        textResult.innerHTML = "Empate";
        }else if(valueComputer === "Tijera"){
        textResult.innerHTML = "Perdiste";
        }else {
        textResult.innerHTML = "¡Empate!";
        }
    } else if (valueGamer === "Tijera"){
        if (valueComputer === "Papel"){
        textResult.innerHTML = "Ganaste";
        }else if(valueComputer === "Tijera"){
        textResult.innerHTML = "Empate";
        }else {
        textResult.innerHTML = "¡Ganaste!";
    }
}
}

   function handleClick(){
    randomMovement();
    compareMovement();
   }



   
   btn.addEventListener("click", handleClick);
