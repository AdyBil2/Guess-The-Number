"use strict";
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
// console.log(guessNumber);
// console.log(secretNumber);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent =
      "Sorry!! You guessed it outside the zone ☹️";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "Bravo!!🏆 You Just Guessed The Correct Number";
    const guessNumber = (document.querySelector(".number").textContent =
      secretNumber);
    document.querySelector("body").style.backgroundColor = "#154c79";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Sorry ☹️ Your Guess Number is Higher, Please Try That Again 🤪";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Sorry 🥹 You Lost the Game";
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent =
      "Sorry ☹️ Your Guess Number is Lower, Please Try That Again 🤪";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "??";
  document.querySelector(".guess").textContent = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
