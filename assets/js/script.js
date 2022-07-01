// var timerID = setTimeout
// var n = 75
// setTimeout(countDown, 75000) {
//     n--;
//     if(n > 0) {
//         setTimeout(countDown, 75000)
//     }
// }


// setTimeout()

// var timerID

// var timerEl = document.getElementById('time');

// function time() {
//     var timeLeft = 75;

//     var timeInterval = setInterval(function () {
//         if (timeLeft > 0) {
//             timerEl.textContent = "Time: " + timeLeft;

//             timeLeft--;
//         } else (timeLeft === 0) {


//         }
//     }, 75000);

// }

// time();

var timerEl = document.getElementById('time');
// Timer that counts down from 5
function time() {
    var timeLeft = 5;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }

answer.onclick = function () {

}


function answer() {

}

var getplayerInitials = function() {
    var initials = document.getElementById('initials');

    while (initials === "" || initials === null) {
        initials = 
    }
}

if (!initials) {
    alert("Please enter your initials.");
    return false;
}

var firstAnswerEl = ;
var secondAnswerEl = ;
var thirdAnswerEl = ;
var fourthAnswerEl = ;
var fifthAnswerEl = ;



var highScore = localStorage.getItem("highscore")
if (highScore === null) {
    highScore = 0;
}

if (timeRemaining > highScore) {
    localStorage.setItem("highscore", timeRemaining);
    localStorage.setItem("initials", playerInitials)
}