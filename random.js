var result = 0;
var buttonCheck = true;



//Changes html element
function changeElement() {
    var x = document.getElementById("textToChange");
    if (x.innerHTML === "I will be changed.") {
      x.innerHTML = "I have changed.";
    } else {
      x.innerHTML = "I will be changed.";
    }
  }

  //changes css element
  function changeCSS() {
      var x = document.getElementById("cssToChange");
          if (x.style.backgroundColor = "red") {
              x.style.backgroundColor = "blue";
          } else {
              
          }      
  }

  function submitText() {
      var x = document.getElementById("secret");
      var y = document.getElementById("response");
      x.value = "";
      if (y.style.color = "white") {
          y.style.color = "black";
      }     
  }

  function generateNum() {
    var num1 = parseInt(document.getElementById('numInput1').value);
    var num2 = parseInt(document.getElementById('numInput2').value);

    //min = Math.floor(num1);
    //max = Math.ceil(num2);
    result = Math.floor(Math.random()*(num2-num1+1)+num1);
  
    document.getElementById("resultLabel").innerHTML = result.toString();
    
    var buttonCheck = false;
  }
  

  function displayElements() {    

    for (i = 0; i < result; i++){
    var para = document.createElement("div");
    //random color
    para.style.color = '#'+ Math.floor(Math.random()*16777215).toString(16);
    //random string
    var node = document.createTextNode(makeid(result));
    //random font size
    para.style.fontSize = Math.floor((Math.random() * 80) + 3)+"px";


    para.appendChild(node);
    var element = document.getElementById("structureDiv");
    element.appendChild(para);
    }
    
  }


  function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
function makeid(length) {
  var letters = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     letters += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return letters;
}