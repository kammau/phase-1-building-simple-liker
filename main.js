// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
errorD = document.getElementById("modal")

let btn = document.querySelector(".like-glyph")
btn.addEventListener("click", fillIn)

function addHidden() {
  errorD.classList.add("hidden")
}

function fillIn() {
  mimicServerCall()
  .then(function (response) {
    return response.json
  })
  .then(function () {
    if (btn.innerHTML === FULL_HEART) {
      btn.classList.remove("activated-heart");
      btn.innerHTML = EMPTY_HEART;
    } else if (btn.innerHTML === EMPTY_HEART) {
      btn.classList.add("activated-heart");
      btn.innerHTML = FULL_HEART;
    }
  })
  .catch(() => {
    errorD.classList.remove("hidden")
    console.log("Error")
    setTimeout(addHidden, 3000);
  })

  
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
