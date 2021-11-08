document.addEventListener("DOMContentLoaded", function onOpen() {
    gameStart();
});

// Event listener - game start button
// calls gameStart function
let startGame = document.getElementById("start-game");
    startGame.addEventListener("click", function(){
        let newInningsDialog = document.getElementById("new-innings-check");
        newInningsDialog.showModal(); 
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

//Event Listener - Confirm Start New Innings dialogue button
// refreshes page to start new game
let newGame = document.getElementById("new-innings-confirm");
newGame.addEventListener("click", function(){
    location.reload();
});

// Eventlistener endGame loss dialogue - play again button
// refreshes page to start new game
let newGameLoss = document.getElementById("lose-play-again");
newGameLoss.addEventListener("click", function(){
    location.reload();
});

// Eventlistener endGame loss dialogue - play again button
// refreshes page to start new game
let newGameWin = document.getElementById("win-play-again");
newGameWin.addEventListener("click", function(){
    location.reload();
});

 /* gameStart function: 
 * opens start game dialogue box
 * calls reset scoreboard function
 * validates start game form data. if invalid displays message to user if valid...
 * ... Calls generate computer score function
 * disable Owzthat button - until Owzthat rolled
 */
function gameStart(){
    // display team choices and levels to user
    let startDialog = document.getElementById("startGame");
    startDialog.showModal();
    resetScoreboard();
    document.getElementById("play-Owzthat").disabled = true;
    
    let submitForm = document.getElementById("start-dialogue-submit");
    submitForm.addEventListener("click", function(event){
        event.preventDefault();
        let inputs = document.getElementById("startForm").elements;
        let firstName = inputs.firstName.value;
        let team = inputs.team.value;
        
        if(firstName === ""){
            let invalidFirstName = document.getElementById("invalid-first-name");
            invalidFirstName.showModal();
        } else if (team === ""){
            let invalidTeam = document.getElementById("invalid-team");
            invalidTeam.showModal();
        } else {
            generateScore(team, firstName);
        }
    });
}

/**
 * generateScore function: 
 * generates random number for computer score for user to beat.
 * displays message to user
 * sets scoreboard target and runs required
 */
function generateScore(teamSelected, firstName){
    let gameStartDialogue = document.getElementById("startGame");
    gameStartDialogue.style.display='none';  
    let initialScore;
    switch (teamSelected){
        case "New Zealand":
            initialScore = 275;
            break;

        case "Australia":
            initialScore = 275;
            break;

        case "India":
            initialScore = 275;
            break;

        case "England":
            initialScore = 225;
            break;

        case "Pakistan":
            initialScore = 225;
            break;

        case "South Africa":
            initialScore = 225;
            break;

        case "Sri Lanka":
            initialScore = 150;
            break;

        case "Bangladesh":
            initialScore = 150;
            break;

        case "West Indies":
            initialScore = 150;
            break;

        case "Afghanistan":
            initialScore = 75;
            break;

        case "Ireland":
            initialScore = 75;
            break;

        case "Zimbabwe":
            initialScore = 75;
            break;

        default:
            initialScore = 150;
    }
    
    let randomComponent = Math.floor(Math.random() * 100);
    let target = initialScore + randomComponent;
    
    let dialogueBox = document.getElementById("dialogue-box");
    let msg = "Welcome " + firstName + " to Lords on a glorious sunny day. You have chosen " + teamSelected + " as the opposition. " + teamSelected + " have batted first and scored " + target + ". Can you beat this target? Click on next ball to start your innings";
    dialogueBox.textContent = msg;
    let scoreboardTarget = document.getElementById("score-to-beat");
    scoreboardTarget.innerText = target;
}

/**
 * playBall function: 
 * generates random number and compares random number against batDie array.
 * if runs scored - increments runs of on-strike batsman, updates scoreboards and scorecards and displays a message to user.
 * if runs %2 !0 calls toggle function to switch on-strike batsman.
 * if Owzthat - displays Owzthat message to user.
 * Compares total runs tally against target if runs < target game continues.
 * If runs > target game ends and end game function called.                                                                                                                                                                                                
 */
function playBall(){
    let batDie = ["0a", "0b", "1a", "1b", "1c", "2a", "2b", 3, 4, 6, "Owzthat"];
    let ball = Math.floor(Math.random() * 11);    
    let runs = batDie[ball];
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.textContent = "The bowler is running in ... ";
    setTimeout (function(){dialogueBox.textContent = " ... He delivers the ball";}, 1000);
    setTimeout(function(){
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
                toggle();            
            break;
        
            case "1b":            
                dialogueBox.textContent = "quick single, well run";
                incrementRuns(1);
                toggle();
            break;
        
            case "1c":            
                dialogueBox.textContent = "Nice shot for a comfortable single";
                incrementRuns(1);
                toggle();
            break;
        
            case "2a":            
                dialogueBox.textContent = "good shot, two runs taken";
                incrementRuns(2);
            break;
    
            case "2b":
                dialogueBox.textContent = "guided into the outfield for an easy two runs";
                incrementRuns(2);
            break;
        
            case 3:
                dialogueBox.textContent = "Nice hit but fielded in the deep, Well run for three";
                incrementRuns(3);
                toggle();
            break;
        
            case 4:            
                dialogueBox.textContent = "Great shot to the boundary, 4 runs";
                incrementRuns(4);
            break;
        
            case 6:            
                dialogueBox.textContent = "That has gone like a rocket and cleared the boundary ropes by a mile, Max 6 runs";
                incrementRuns(6);
            break;
        
            case "Owzthat":
                dialogueBox.textContent = "OWZ-that!!! - The fielding side are appealing. Click on the OWZthat button to learn your fate";
                document.getElementById("play-Owzthat").disabled = false;
                document.getElementById("play-ball").disabled = true; 
            break;  
        }
        }, 2500);
}

/**
 * incrementRuns function: 
 * increments runs for batsmen and totals and decrements Runs remaining on scoreboard and scorecard.
 */
function incrementRuns(runs){
    let batRuns = parseInt(document.getElementsByClassName('on-strike')[0].innerText);
    let batsmanUpdate = document.getElementsByClassName("on-strike")[0];
    let incrementRuns = batRuns + runs;
    batsmanUpdate.textContent = incrementRuns;
    let totalTargetEl = document.getElementById("innings-total-score");
    let previousTotal = parseInt(document.getElementById("innings-total-score").innerText);
    let incrementTotal;

    incrementTotal = previousTotal + runs;
    totalTargetEl.textContent = incrementTotal;

    let target = parseInt(document.getElementById("score-to-beat").innerText);
    let runsRemaining = document.getElementById("runs-to-get");
    runsRemaining.innerText = target - incrementTotal;

    let targetReached = parseInt(runsRemaining.innerText);
    let wicketsFallen = parseInt(document.getElementById("wickets-count").innerText);
    if(targetReached <= 0){
        endGameWin(wicketsFallen, target);
    }
}

/**
 * increments extras score and total after not out decision from umpire.
 * updates scoreboard and scorecard and displays message to user.
 * Compares total runs tally against target if runs < target game continues.
 * If runs > target game ends and end game function called.
 */
function incrementExtras(){
    let previousExtras = parseInt(document.getElementById('extras').innerText);
    let extrasUpdate = document.getElementById("extras"); 

    let incrementExtras = previousExtras + 1;
    extrasUpdate.textContent = incrementExtras;

    let totalTargetEl = document.getElementById("innings-total-score");
    let previousTotal = parseInt(document.getElementById("innings-total-score").innerText);

    let incrementTotal = previousTotal + 1;
    totalTargetEl.textContent = incrementTotal;

    let target = parseInt(document.getElementById("score-to-beat").innerText);
    let runsRemaining = document.getElementById("runs-to-get");
    runsRemaining.innerText = target - incrementTotal;

    let wicketsFallen = parseInt(document.getElementById("wickets-count").innerText);

    let targetReached = parseInt(runsRemaining.innerText);
    if(targetReached <= 0){
        endGameWin(wicketsFallen, target);
}
}

/**
 * umpire function: 
 * generates random number and compares random number with umpire array. 
 * If not out displays message to user to continue.
 * If extras calls extras function. 
 * If wicket calls wicket function.
 */
function umpire(){
    let umpire = ["leg-bye", "bye", "no ball", "wide", "not out", "not out", "not out", "caught", "bowled", "LBW", "Run Out", "stumped" ];
    let appeal = Math.floor(Math.random() * 12);
    let decision = umpire[appeal];
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.textContent ="Umpire's decision pending";
    setTimeout(function(){
    if (appeal <= 3){
        extras(decision);
    } else if (appeal > 3 && appeal < 7){
        dialogueBox.textContent = "The umpires decision is Not Out. Select Next Ball to continue playing";
    }
    else if (appeal >= 7){
        wicket(decision);
    } else {
        alert("No decision - try again");
    }
}, 2000);

    document.getElementById("play-Owzthat").disabled = true;
    document.getElementById("play-ball").disabled = false;
}

/**
 * Extras function 
 * Processes Owzthat value and displays message to user
 * calls increment extras function and toggle function if appropriate. 
 */
function extras(decision){ 
    let dialogueBox = document.getElementById("dialogue-box");
    
    switch (decision){
        case "leg-bye":
            incrementExtras();
            toggle();           
            dialogueBox.textContent = "A leg-bye to be added to the extras column. Select next ball to carry on batting";
        break;
        
        case "bye":
            incrementExtras();
            toggle();            
            dialogueBox.textContent = " One bye added to the extras. Continue batting by selecting next ball";
        break;

        case "no ball":
            incrementExtras();         
            dialogueBox.textContent = "A no ball. One more added to the extras. Carry on batting. Select next ball";
        break;

        case "wide":
            incrementExtras();
            dialogueBox.textContent = "That one has gone wide! Another run for the extras. Keep on batting. Select the next ball button.";
        break;
    }
}

/**
 * wicket function: 
 * switches to next batsman. 
 * Resets the batsman score to zero and adds on-strike class to new batsman. 
 * Increments the wickets tally. Updates the scoreboard and scorecard. 
 * disable Owzthat button
 * Checks wickets tally. 
 * If wickets tally = 10, calls end game function. 
 * If wickets tally < 10 displays message to user to continue
 */
function wicket(decision){
    let dialogueBox = document.getElementById("dialogue-box");
    let batWkt = parseInt(document.getElementsByClassName('on-strike')[0].innerText);
    let batWktUpdate = document.getElementsByClassName('on-strike')[0];
    let batWktLabel = document.getElementsByClassName("on-strike-Num")[0];
    let batALabel = parseInt(document.getElementById("batNumA").innerText); 
    let batBLabel = parseInt(document.getElementById("batNumB").innerText);
    
    let wktUpdate = document.getElementById("wickets-count");
    let wktCount = parseInt(document.getElementById("wickets-count").innerText);
    let previousTotal = parseInt(document.getElementById("innings-total-score").innerText);
    let lastWkt = document.getElementById("last-wicket");
    let lastBatsman = document.getElementById("last-bat");

    dialogueBox.textContent = "You're out!! The umpire's decision is " + decision;
   
    lastBatsman.innerText = batWkt;
    batWktUpdate.innerText = 0;
    wktUpdate.innerText = wktCount + 1;
    lastWkt.innerText = previousTotal;
        
    if(batALabel > batBLabel){
        batWktLabel.innerText = batALabel + 1;
    } else {
        batWktLabel.innerText = batBLabel + 1;
    }
    
    let wktTally = parseInt(document.getElementById("wickets-count").innerText);
    if(wktTally >= 10){
        endGameLose(previousTotal);
    }
}

/**
 * endGame (win) function: processes result and displays relevant result message
 */
function endGameWin(wicketsFallen, target){
    let winDialogue = document.getElementById("endGameWin");
    winDialogue.showModal();
    let winTarget = document.getElementById("winningTarget");
    winTarget.innerText = "You were set " + target + " runs to win.";
    let fallenWickets = document.getElementById("winMargin");
    let win = (10 - wicketsFallen);
   fallenWickets.innerText = "You have reached this target and won by " + win + " wickets";
}

/**
 * endGame (loss) function: processes result and displays relevant result message
 */
function endGameLose(previousTotal){
    let lossDialogue = document.getElementById("endGameDefeat");
    lossDialogue.showModal();
    let winningTarget = parseInt(document.getElementById("score-to-beat").innerText);
    let losingMargin = winningTarget - previousTotal;
    let dialogueTargetMessage = document.getElementById("target-required");
    let dialogueMarginMessage = document.getElementById("defeat-margin");
    dialogueTargetMessage.innerText = "You were set a target of " + winningTarget + " to win";
    dialogueMarginMessage.innerText = "You scored " + previousTotal + " runs all out. You have lost by " + losingMargin + " runs."; 
}

/**
 * Toggle function
 * switches on-strike batsman when an odd number of runs or extras are scored.
 */
function toggle(){
    let batA = document.getElementById("batA");
    let batB = document.getElementById("batB");
    let batNumA = document.getElementById("batNumA");
    let batNumB = document.getElementById("batNumB");
    
    batA.classList.toggle("on-strike");
    batB.classList.toggle("on-strike");
    batA.classList.toggle("non-striker");
    batB.classList.toggle("non-striker");
    batNumA.classList.toggle("on-strike-Num");
    batNumB.classList.toggle("on-strike-Num");
    batNumA.classList.toggle("non-striker-Num");
    batNumB.classList.toggle("non-striker-Num");
}

/** 
 * reset scoreboard function
 * resets scoreboard to initial start game values at start of new game
 */
function resetScoreboard(){
let batsmanNumA = document.getElementById("batNumA");
batsmanNumA.innerText = "1";
let batsmanNumB = document.getElementById("batNumB");
batsmanNumB.innerText = "2";
let scoreBoxes = document.getElementsByClassName("score-box");      
for (let i = 0; i < scoreBoxes.length; i++){
    scoreBoxes[i].innerText = "0";
}
}


