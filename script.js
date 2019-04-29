"use strict";
let userHealth = 40;
let grantHealth= 10;
let userwins = 0;
let grantwins = 0;
let userHit = 0;
let grantHit = 0;

let choice = prompt("Do you want to play");

if (choice === "yes"){

let name = prompt("What is your name?"); 

while( grantwins < 1 && userwins < 3){
    

    if(grantHealth > 0 && userHealth > 0){

        
         userHit = Math.floor(Math.random() * 2) + 1;
         grantHit = Math.floor(Math.random() * 2)+ 1;

        
        userHealth = (userHealth - userHit);
        grantHealth = (grantHealth - grantHit);

        console.log(`Grant has ${grantHealth} health left`);
        console.log(`${name} has ${userHealth} health left`);

    }  if (grantHealth <= 0) {
        console.log("You won this battle!")
        userwins++;
        grantHealth = 10;
        
    
    }  if (userHealth <= 0) {
        grantwins++;
        console.log("sorry! You lost! You're a loser!");
        break;
        
    }  if (userwins === 3){
        console.log("You Won! You defeated the mighty Grant!");
        break;
    }

}   

}