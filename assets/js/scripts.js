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
    
    //let batRuns = parseInt(document.getElementsByClassName('on-strike')[0].innerText); 
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.textContent = "The bowler is running in ... ";
    //set time-out
    dialogueBox.textContent = " ... He delivers the ball";
    // set time out
    
    //let batsmanUpdate = document.getElementsByClassName("on-strike")[0];
    //let incrementRuns;
    //let totalTargetEl = document.getElementById("innings-total-score");
    //let previousTotal = parseInt(document.getElementById("innings-total-score").innerText);
    //let incrementTotal;
    
    let batA = document.getElementById("batA");
    let batB = document.getElementById("batB");
    //let total = parseInt(document.getElementById("innings-total-score").innerText);

    switch (runs){
        case "0a":            
            dialogueBox.textContent = "Well defended but no runs";
        break;
    
        case "0b":            
            dialogueBox.textContent ="shot and miss, no runs";
        break;
    
        case "1a":            
            dialogueBox.textContent = "Well done, You've sneaked it through the infield for one run";
            incrementRuns(1);
            //incrementRuns = batRuns + 1;
            //batsmanUpdate.textContent = incrementRuns;
            batA.classList.toggle("on-strike");
            batB.classList.toggle("on-strike");
            //incrementTotal = previousTotal + 1;
            //totalTargetEl.textContent = incrementTotal;
        break;
    
        case "1b":
            
            dialogueBox.textContent = "quick single, well run";
            incrementRuns(1);
            //incrementRuns = batRuns +1;
            //batsmanUpdate.textContent = incrementRuns;
            batA.classList.toggle("on-strike");
            batB.classList.toggle("on-strike");
            //incrementTotal = previousTotal + 1;
            //totalTargetEl.textContent = incrementTotal;
        break;
    
        case "1c":
            
            dialogueBox.textContent = "Nice shot for a comfortable single";
            incrementRuns(1);
            //incrementRuns = batRuns + 1;
            //batsmanUpdate.textContent = incrementRuns;
            batA.classList.toggle("on-strike");
            batB.classList.toggle("on-strike");
            //incrementTotal = previousTotal + 1;
            //totalTargetEl.textContent = incrementTotal;
        break;
    
        case "2a":
            
            dialogueBox.textContent = "good shot, two runs taken";
            incrementRuns(2);
            //incrementRuns = batRuns + 2;
            //batsmanUpdate.textContent = incrementRuns;
            //incrementTotal = previousTotal + 2;
            //totalTargetEl.textContent = incrementTotal;
        break;

        case "2b":
            
            dialogueBox.textContent = "guided into the outfield for an easy two runs";
            incrementRuns(2);
            //incrementRuns = batRuns + 2;
            //batsmanUpdate.textContent = incrementRuns;
            //incrementTotal = previousTotal + 2;
            //totalTargetEl.textContent = incrementTotal;
        break;
    
        case 3:
            
            dialogueBox.textContent = "Nice hit but fielded in the deep, Well run for three";
            incrementRuns(3);
            //incrementRuns = batRuns + 3;
            //batsmanUpdate.textContent = incrementRuns;
            batA.classList.toggle("on-strike");
            batB.classList.toggle("on-strike");
            //incrementTotal = previousTotal + 3;
            //totalTargetEl.textContent = incrementTotal;
        break;
    
        case 4:
            
            dialogueBox.textContent = "Great shot to the boundary, 4 runs";
            incrementRuns(4);
            //incrementRuns = batRuns + 4;
            //batsmanUpdate.textContent = incrementRuns;
            //incrementTotal = previousTotal + 4;
            //totalTargetEl.textContent = incrementTotal;
        break;
    
        case 6:
            
            dialogueBox.textContent = "That has gone like a rocket and cleared the boundary ropes by a mile, Max 6 runs";
            incrementRuns(6);
            //incrementRuns = batRuns + 6;
            //batsmanUpdate.textContent = incrementRuns;
            //incrementTotal = previousTotal + 6;
            //totalTargetEl.textContent = incrementTotal;
        break;
    
        case "Owzthat":
            dialogueBox.textContent = "OWZ-that!!! - The fielding side are appealing. Roll the umpire die to learn your fate";
        break;
    
    }
}

/**
 * incrementRuns function: increments runs for batsmen, extras and totals and decrements Runs remaining on scoreboard and scorecard.
 */

function incrementRuns(runs){
    let batRuns = parseInt(document.getElementsByClassName('on-strike')[0].innerText);
    let batsmanUpdate = document.getElementsByClassName("on-strike")[0];
    let incrementRuns; 

    incrementRuns = batRuns + runs;
    batsmanUpdate.textContent = incrementRuns;

    let totalTargetEl = document.getElementById("innings-total-score");
    let previousTotal = parseInt(document.getElementById("innings-total-score").innerText);
    let incrementTotal;

    incrementTotal = previousTotal + runs;
    totalTargetEl.textContent = incrementTotal;
}

/**
 * umpire function: generates random number and compares random number with umpire array. 
 * If not out displays message to user to continue.
 * If extras calls extras function. 
 * If wicket calls wicket function.
 */
function umpire(){
    alert(`umpire() has been called`);
    let umpire = ["leg-bye", "bye", "no ball", "wide", "not out", "dropped catch", "Run out attempt! - close but not out", "caught", "bowled", "LBW", "Run Out", "stumped" ];
    let appeal = Math.floor(Math.random() * 12);
    
    let decision = umpire[appeal];
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.textContent ="Umpires decision pending";
// set timeout here

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