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
roulleteNumbers[4] =  [4, 2, 2]; // Four, Black, Even
roulleteNumbers[5] =  [5, 1, 1]; // Five, Red, Odd
roulleteNumbers[6] =  [6, 2, 2]; // Six, Black, Even
roulleteNumbers[7] =  [7, 1, 1]; // Seven, Red, Odd
roulleteNumbers[8] =  [8, 2, 2]; // Eight, Black, Even
roulleteNumbers[9] =  [9, 1, 1]; // Nine, Red, Odd
roulleteNumbers[10] = [10, 2, 2]; // Ten, Black, Even



var userBetType;
var playerGuess;


// =================== Collecting all the player input =====================


function inputSelection() {
    //COLOR
    if(document.getElementById("color").checked == true){
        userBetType = 1;
        document.getElementById("Black").disabled = false;
        document.getElementById("Red").disabled = false;
    }
    else{
        document.getElementById("Black").disabled = true;
        document.getElementById("Red").disabled = true;
    }
    // ODD OR EVEN
    if(document.getElementById("OddEven").checked == true){
        userBetType = 2;
        document.getElementById("Odd").disabled = false;
        document.getElementById("Even").disabled = false;
    }
    else{
        document.getElementById("Odd").disabled = true;
        document.getElementById("Even").disabled = true;
    }
    // COLOR 
    if(document.getElementById("NumberRadio").checked == true){
        userBetType = 0;
        document.getElementById("playerNumberGuess").disabled = false;
    }
    console.log("bet type = ", userBetType);
  }

  //============== Rolling the number generator and checking to see if the player was correct =================
  function rollTheTable(){
      //Red or Black
      if(document.getElementById("Red").checked == true){
        playerGuess = 1;
      }
      if(document.getElementById("Black").checked == true){
        playerGuess = 2;
    }
    //Odd or Even
    if(document.getElementById("Odd").checked == true){
        playerGuess = 1;
      }
      if(document.getElementById("Even").checked == true){
        playerGuess = 2;
    }
    // NUMBER
    if(document.getElementById("NumberRadio").checked == true){
        playerGuess = parseInt(document.getElementById("playerNumberGuess").value); 
    }
    console.log("player guess = ", playerGuess);
    //Rolling the table

    var roll = Math.floor(Math.random()*11);

    var rolledArray = roulleteNumbers[roll];
    
    var correctAnswer = rolledArray[userBetType];

    console.log("correct answer = ", correctAnswer);
  
    if(playerGuess == correctAnswer){
        console.log("You have guessed correctly");
        //if the player is correct, their bet amount will multiplied based on their betType and awarded to them
    }
    if(playerGuess != correctAnswer){
        console.log("You have guessed incorrectly");
        //if the player is incorrect, their bet amount will be subtracted
    }
// ================== END TABLE ROLL ===========================



  }
