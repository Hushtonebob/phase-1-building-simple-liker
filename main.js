// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const likeButtons = Array.from(document.getElementsByClassName("like-glyph"));

likeButtons.forEach(likeGlyph => likeGlyph.addEventListener("click", handleLike))

function handleLike(e){
const targetGlyph = e.target;
mimicServerCall()
.then( () => {
  if(targetGlyph.innerText === EMPTY_HEART ){
    targetGlyph.innerText = FULL_HEART
    targetGlyph.className = "activated-heart"
  }
  else {
    targetGlyph.innerText = EMPTY_HEART
    targetGlyph.className = ""
  }
} )
.catch(error => {
const modal = document.querySelector("#modal")
modal.className = ""  
modal.innerText = error
setTimeout(() => modal.className = "hidden", 3000 )
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
