// Event listener - game start button
//Event listener - next ball button
//Event listener - OWZthat button

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
 * playBall function: generates random number and compares random number against balls array.
 * if runs scored - increments runs of on-strike batsman, updates scoreboards and scorecards and displays a message to user.
 * if runs %2 !0 switches on-strike (class) batsman to non-striker (class) and vice versa.
 * if Owzthat - displays Owzthat message to user.
 * Compares total runs tally against target if runs < target game continues.
 * If runs > target game ends and end game function called.                                                                                                                                                                                                
 */
function playBall(){

}

/**
 * umpire function: generates random number and compares random number with umpire array. 
 * If not out displays message to user to continue.
 * If extras calls extras function. 
 * If wicket calls wicket function.
 */
function umpire(){

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