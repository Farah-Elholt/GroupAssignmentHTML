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