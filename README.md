# OWZthat
## Portfolio-project-2-Javascript-Essentials

### overview
Owzthat was a game I played when I was a child in the 1970's. It was based on the game of cricket and involved the rolling of two six sided dice. I thought it would be great if this game could be reproduced as an online version so users could experience the entertainment I had as a child with a few extra features. The user or player plays against the computer, which generates a target score based on one of four levels chosen by input from the player. The player has to beat the target set by the computer. 

![Owzthat image](assets/images/Owzthat_image.png)

Owzthat demonstrates Javascript in its use of arrays, event listeners random number generators, conditional statements, manipulation of the DOM and functions to replicate the gameplay.

With the online game not being limited to the outcomes of two six sided dice, I have taken the opportunity to modify some of the scoring and wicket loss frequencies. This has been to more accurately reflect outcomes I consider can realistically be expected from a real game of cricket.


### responsiveness screenshot
![ami responsive mock up image](assets/images/amiresponsive_screenshot.png)
Screenshot of Owzthat displayed on Am I Responsive website.


### features

### existing features

#### Opening game start dialogue box
Upon opening Owzthat a game start dialogue box is immediately displayed to the player. The gameplay area is displayed greyed out in the background. This is so the player can enter their name and choose an opponent and difficulty level. 

![Screenshot of opening start game dialogue box displayed to player](assets/images/game_start_dialogue_box.png)

On submitting the dialogue box form, it is validated to ensure the player has entered a name and selected a team to play against. If there is data missing a further dialogue box is displayed to the player informing them the fields must be completed before continuing.

Once the form passes validation and is submitted by the player, a target score is generated and the main game play screen is revealed.


#### game play page and rules page

There are two pages of the Owzhat website. The first page is the main gameplay area and the second page sets out the rules and procedures of the game to the player.

#### heading

The headings of the gameplay and rules page are displayed using as close to the styling and colours of the original OWZthat game tin as possible. This is to maintain the association with the original game.

![OWZthat website title banner](assets/images/title_bar.png)
OWZthat website title bar

#### navigation bar

there is a navigation bar with one item which allows the player to navigate to and from the rules page and main gameplay page.

![Navigation bar screenshot](assets/images/navbar_screenshot.png)
Navigation bar screenshot


#### scoreboard
The scoreboard is the area that displays all the game data to the player. It includes the target reqired which is static throughout the game. Batsman scores, total scores and extras are incremented as runs and extras are scored. One of the current batsmen, the wickets, last wicket and last batsman scores are updated as a wicket falls. The runs remaining score is decremented as runs and extras are scored.



If in the game the wickets total reaches 10 the game is lost. Otherwise if the total equals the target (and runs remaining reaches 0) the game is won.

Through the scoreboard the player is able to monitor progress against the target throughout the game.


#### dialogue/commentary area
The commentary dialogue area, on initial start up, welcomes the player to the game and displays the target for the player to try and beat. Throught the progression of the game the commentary dialogue box provides ball by ball commentary to the player of the outcome of each batsman shot and umpire decision.

Through the commentary dialogue box the player is informed whether to next click the play ball or OWZthat button.

#### buttons
There are three buttons in the main game area. 

#### rules

### features left to implement

### Testing
browsers
HTML
CSS
Javascript
include metrics
![lighthouse report screenshot]

### unfixed bugs

### Deployment

### Credits
#### content
W3Schools
bootstrap
font-awesome
#### media
shutterstock
icons


