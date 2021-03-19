var roulleteNumbers = new Array();
/* GUIDE:
    Array num = roullete number. 
    Ex: roulleteNumbers[0] is 0
     roulleteNumbers[1] is 1

     [38] will likely be 00

    The first number in the subarray (position[0]) is also the roullete number.
    Ex: [0] in roulleteNumber[0] is 0
        [0] in roulleteNumber[1] is 1

    The second number in the subarray (position[1]) is color.
     0 = GREEN (green is relevant on 0 and 00)
     1 = RED
     2 = BLACK

    The Third number in the sub array (position[2]) is odd or even.
     0 & 00 = 0
     1 = ODD
     2 = EVEN 

     Other data types will be added once more funcitonality is achieved
     */
    
roulleteNumbers[0] =  [0, 0, 0]; // Zero, Green, neither odd or even
roulleteNumbers[1] =  [1, 1, 1]; // One, Red, Odd
roulleteNumbers[2] =  [2, 2, 2]; // Two, Black, Even
roulleteNumbers[3] =  [3, 1, 1]; // Three, Red, Odd

var roll = Math.floor(Math.random()*4);

//At some point this user input it going to change based on what the player wants to bet on (Number, Color, Odd/Even)
var userBetType = 2;

var rolledArray = roulleteNumbers[roll];

var correctAnswer = rolledArray[userBetType];

/*At this moment we have determined what the correct roll for the roullete table is by identifying the subarray using a random number
generator, and then selecting a value within that array (number, color, odd/even) based on user input */

//Now we will compare the players guess to the actual roll

var playerGuess = 1;
//this guess will be parsed from a text box and or radio butten depending on the guess input type. For now it is 1.

if(playerGuess == correctAnswer){
    console.log("You have guessed correctly");
    //if the player is correct, their bet amount will multiplied based on their betType and awarded to them
}
if(playerGuess != correctAnswer){
    console.log("You have guessed incorrectly");
    //if the player is incorrect, their bet amount will be subtracted
}



