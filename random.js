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
    var num1 = document.getElementById('numInput1').value;
    var num2 = document.getElementById('numInput2').value;

    min = Math.ceil(num1);
    max = Math.floor(num2);
    var result =  Math.ceil(Math.random() * (num2 - num1 + 1));

    document.getElementById("resultLabel").innerHTML = result.toString();
  }