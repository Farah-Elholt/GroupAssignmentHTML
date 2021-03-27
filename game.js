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

roulleteNumbers[0] = [0, 0, 0]; // Zero, Green, neither odd or even
roulleteNumbers[1] = [1, 1, 1]; // One, Red, Odd
roulleteNumbers[2] = [2, 2, 2]; // Two, Black, Even
roulleteNumbers[3] = [3, 1, 1]; // Three, Red, Odd
roulleteNumbers[4] = [4, 2, 2]; // Four, Black, Even
roulleteNumbers[5] = [5, 1, 1]; // Five, Red, Odd
roulleteNumbers[6] = [6, 2, 2]; // Six, Black, Even
roulleteNumbers[7] = [7, 1, 1]; // Seven, Red, Odd
roulleteNumbers[8] = [8, 2, 2]; // Eight, Black, Even
roulleteNumbers[9] = [9, 1, 1]; // Nine, Red, Odd
roulleteNumbers[10] = [10, 2, 2]; // Ten, Black, Even


roulleteNumbers[11] = [11, 2, 1]; // Eleven, Black, Odd
roulleteNumbers[12] = [12, 1, 2]; // Twelve, Red, Even
roulleteNumbers[13] = [13, 2, 1]; // Thirteen, Black, Odd
roulleteNumbers[14] = [14, 1, 2]; // Fourteen, Red, Even
roulleteNumbers[15] = [15, 2, 1]; // Fifteen, Black, Odd
roulleteNumbers[16] = [16, 1, 2]; // Sixteen, Red, Even
roulleteNumbers[17] = [17, 2, 1]; // Seventeen, Black, Odd
roulleteNumbers[18] = [18, 1, 2]; // Eighteen, Red, Even
roulleteNumbers[19] = [19, 1, 1]; // Nineteen, Red, Odd
roulleteNumbers[20] = [20, 2, 2]; // Twenty, Black, Even


roulleteNumbers[21] = [21, 1, 1]; // Twenty One, Red, Odd
roulleteNumbers[22] = [22, 2, 2]; // Twenty Two, Black, Even
roulleteNumbers[23] = [23, 1, 1]; // Twenty Three, Red, Odd
roulleteNumbers[24] = [24, 2, 2]; // Twenty Four, Black, Even
roulleteNumbers[25] = [25, 1, 1]; // Twenty Five, Red, Odd
roulleteNumbers[26] = [26, 2, 2]; // Twenty Six, Black, Even
roulleteNumbers[27] = [27, 1, 1]; // Twenty Seven, Red, Odd
roulleteNumbers[28] = [28, 2, 2]; // Twenty Eight, Black, Even
roulleteNumbers[29] = [29, 2, 1]; // Twenty Nine, Red, Odd
roulleteNumbers[30] = [30, 1, 2]; // Thirty, Red, Even


roulleteNumbers[31] = [31, 2, 1]; // Thirty One, Black, Odd
roulleteNumbers[32] = [32, 1, 2]; // Thirty Two, Red, Even
roulleteNumbers[33] = [33, 2, 1]; // Thirty Three, Black, Odd
roulleteNumbers[34] = [34, 1, 2]; // Thirty Four, Red, Even
roulleteNumbers[35] = [35, 2, 1]; // Thirty Five, Black, Odd
roulleteNumbers[36] = [36, 1, 2]; // Thirty Six, Red, Even



var userBetType;
var playerGuess;

var userDollars = 1000;
var playerBet;

var colorMultiplier = 2;
var oddevenMultiplier = 2;
var numberMultiplier = 37;

var currentMultiplier;
var winnings;


// =================== Collecting all the player input =====================
function betButton() {
    var str = document.getElementById("playerBetInput").value
    if(str===""){
        console.log("hello I am empty");
        return;
    }else{
        playerBet = parseInt(document.getElementById("playerBetInput").value);
        if (0 > userDollars - playerBet) {
            console.log("Bet amount too high");
            window.alert("Bet amount is too high, please lower your bet.")
            document.getElementById("playerBetInput").value = "";
            playerBet = 0;
        }
        else {
            userDollars = userDollars - playerBet;
            document.getElementById("resultBox3").innerHTML = "You have: " + userDollars;
            document.getElementById("playerBetInput").disabled = true;
        }
    }
}


function inputSelection() {
    //COLOR
    if (document.getElementById("color").checked == true) {
        userBetType = 1;
        document.getElementById("Black").disabled = false;
        document.getElementById("Red").disabled = false;
    }
    else {
        document.getElementById("Black").disabled = true;
        document.getElementById("Red").disabled = true;
    }
    // ODD OR EVEN
    if (document.getElementById("OddEven").checked == true) {
        userBetType = 2;
        document.getElementById("Odd").disabled = false;
        document.getElementById("Even").disabled = false;
    }
    else {
        document.getElementById("Odd").disabled = true;
        document.getElementById("Even").disabled = true;
    }
    // number
    if (document.getElementById("NumberRadio").checked == true) {
        userBetType = 0;
        document.getElementById("playerNumberGuess").disabled = false;
    }
    console.log("bet type = ", userBetType);
}

//============== Rolling the number generator and checking to see if the player was correct =================

function rollTheTable() {
    if(userBetType===0||userBetType==1||userBetType==2){
        //Red or Black
        if (document.getElementById("Red").checked == true) {
            playerGuess = 1;
            currentMultiplier = colorMultiplier;
        }
        if (document.getElementById("Black").checked == true) {
            playerGuess = 2;
            currentMultiplier = colorMultiplier;
        }
        //Odd or Even
        if (document.getElementById("Odd").checked == true) {
            playerGuess = 1;
            currentMultiplier = oddevenMultiplier;
        }
        if (document.getElementById("Even").checked == true) {
            playerGuess = 2;
            currentMultiplier = oddevenMultiplier;
        }
        // NUMBER
        if (document.getElementById("NumberRadio").checked == true) {
            playerGuess = parseInt(document.getElementById("playerNumberGuess").value);
            currentMultiplier = numberMultiplier;
        }
        //Rolling the table
        var roll = Math.floor(Math.random() * 37);
        var rolledArray = roulleteNumbers[roll];
        var correctAnswer = rolledArray[userBetType];
        
        if (playerGuess == correctAnswer) {
            console.log("hello I should not be here");
            winnings = playerBet * currentMultiplier;
            userDollars += winnings;

            document.getElementById("resultBox").innerHTML = roll;
            document.getElementById("resultBox2").innerHTML = "You have guessed correctly. You won: " + winnings;;
            document.getElementById("resultBox3").innerHTML = "You have: " + userDollars;
            resetButton();
            //if the player is correct, their bet amount will multiplied based on their betType and awarded to them
        }else{
            document.getElementById("resultBox").innerHTML = roll;
            document.getElementById("resultBox2").innerHTML = "You have guessed incorrectly.";
            document.getElementById("resultBox3").innerHTML = "You have: " + userDollars;
            //if the player is incorrect, their bet amount will be subtracted
            resetButton();
        }
        // ================== END TABLE ROLL ===========================
            
    
    
    }
}


    function resetButton() {

    
    playerBet = 0;
    playerGuess = null;
    userBetType = 4;
    roll = 0;


    document.getElementById("playerBetInput").disabled = false;
    document.getElementById("playerBetInput").value = "";

    document.getElementById("color").checked = false;
    document.getElementById("OddEven").checked = false;
    document.getElementById("NumberRadio").checked = false;

    document.getElementById("Red").checked = false;
    document.getElementById("Black").checked = false;
    document.getElementById("Black").disabled = true;
    document.getElementById("Red").disabled = true;
    
    document.getElementById("Odd").checked = false;
    document.getElementById("Even").checked = false;
    document.getElementById("Odd").disabled = true;
    document.getElementById("Even").disabled = true;

    document.getElementById("playerNumberGuess").value = "";
    document.getElementById("playerNumberGuess").disabled = true;
    
    //document.getElementById("resultBox").innerHTML = "";
    //document.getElementById("resultBox2").innerHTML = "";
    }