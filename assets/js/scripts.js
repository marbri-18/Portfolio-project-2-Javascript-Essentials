document.addEventListener("DOMContentLoaded", function() {
    gameStart();
});
// Event listener - game start button
// calls gameStart function
let startGame = document.getElementById("start-game");
    startGame.addEventListener("click", function(){
        gameStart();
    });
//Event listener - next ball button
// calls playBall function
let nextBall = document.getElementById("play-ball");
    nextBall.addEventListener("click", function(){
        playBall();
    });
//Event listener - OWZthat button
// calls umpire function
let callUmpire = document.getElementById("play-Owzthat");
    callUmpire.addEventListener("click", function(){
        umpire();
    });

/**
 * gameStart function: Resets scores, scoreboard and scorecard to zero.
 * Calls generate computer score function
 */
function gameStart(){
    alert(`gameStart() has been called`);
}

/**
 * generateScore function: generates random number for computer score for user to beat.
 * displays message to user
 * sets scoreboard target and runs required
 */
function generateScore(){

}

/**
 * playBall function: generates random number and compares random number against batDie array.
 * if runs scored - increments runs of on-strike batsman, updates scoreboards and scorecards and displays a message to user.
 * if runs %2 !0 switches on-strike (class) batsman to non-striker (class) and vice versa.
 * if Owzthat - displays Owzthat message to user.
 * Compares total runs tally against target if runs < target game continues.
 * If runs > target game ends and end game function called.                                                                                                                                                                                                
 */
function playBall(){
    let batDie = ["0a", "0b", "1a", "1b", "1c", "2a", "2b", 3, 4, 6, "Owzthat"];
    let ball = Math.floor(Math.random() * 11);    
    let runs = batDie[ball];
    
    let batRuns = parseInt(document.getElementsByClassName('on-strike')[0].innerText); 
    let dialogueBox = document.getElementById("dialogue-box");
    let batsmanUpdate = document.getElementsByClassName("on-strike")[0];
    let incrementRuns;
    let batA = document.getElementById("batA");
    let batB = document.getElementById("batB");

    switch (runs){
        case "0a":            
            dialogueBox.textContent = "Well defended but no runs";
        break;
    
        case "0b":            
            dialogueBox.textContent ="shot and miss, no runs";
        break;
    
        case "1a":            
            dialogueBox.textContent = "Well done, You've sneaked it through the infield for one run";
            incrementRuns = batRuns + 1;
            batsmanUpdate.textContent = incrementRuns;
            batA.classList.toggle("on-strike");
            batB.classList.toggle("on-strike");
        break;
    
        case "1b":
            
            dialogueBox.textContent = "quick single, well run";
            incrementRuns = batRuns +1;
            batsmanUpdate.textContent = incrementRuns;
            batA.classList.toggle("on-strike");
            batB.classList.toggle("on-strike");
        break;
    
        case "1c":
            
            dialogueBox.textContent = "Nice shot for a comfortable single";
            incrementRuns = batRuns + 1;
            batsmanUpdate.textContent = incrementRuns;
            batA.classList.toggle("on-strike");
            batB.classList.toggle("on-strike");
        break;
    
        case "2a":
            
            dialogueBox.textContent = "good shot, two runs taken";
            incrementRuns = batRuns + 2;
            batsmanUpdate.textContent = incrementRuns;
        break;

        case "2b":
            
            dialogueBox.textContent = "guided into the outfield for an easy two runs";
            incrementRuns = batRuns + 2;
            batsmanUpdate.textContent = incrementRuns;
        break;
    
        case 3:
            
            dialogueBox.textContent = "Nice hit but fielded in the deep, Well run for three";
            incrementRuns = batRuns + 3;
            batsmanUpdate.textContent = incrementRuns;
            batA.classList.toggle("on-strike");
            batB.classList.toggle("on-strike");
        break;
    
        case 4:
            
            dialogueBox.textContent = "Great shot to the boundary, 4 runs";
            incrementRuns = batRuns + 4;
            batsmanUpdate.textContent = incrementRuns;
        break;
    
        case 6:
            
            dialogueBox.textContent = "That has gone like a rocket and cleared the boundary ropes by a mile, Max 6 runs";
            incrementRuns = batRuns + 6;
            batsmanUpdate.textContent = incrementRuns;
        break;
    
        case "Owzthat":
            dialogueBox.textContent = "OWZ-that!!! - The fielding side are appealing. Roll the umpire die to learn your fate";
        break;
    
    }
}



/**
 * umpire function: generates random number and compares random number with umpire array. 
 * If not out displays message to user to continue.
 * If extras calls extras function. 
 * If wicket calls wicket function.
 */
function umpire(){
    alert(`umpire() has been called`);
}

/**
 * Extras function increments extras score and total 
 * updates scoreboard and scorecard and displays message to user.
 * Compares total runs tally against target if runs < target game continues.
 * If runs > target game ends and end game function called. 
 */
function extras(){

}

/**
 * wicket function: switches to next batsman. 
 * Resets the batsman score to zero and adds on-strike class to new batsman. 
 * Increments the wickets tally. Updates the scoreboard and scorecard. 
 * Checks wickets tally. 
 * If wickets tally = 10, calls end game function. 
 * If wickets tally < 10 displays message to user to continue
 */
function wicket(){

}

/**
 * endGame function: processes result and displays relevant result message
 */
function endGame(){

}