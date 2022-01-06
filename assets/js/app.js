// GLOBAL VARIABLES

let handRock = document.querySelector(".handRock");
let handPaper = document.querySelector(".handPaper");
let handScissors = document.querySelector(".handScissors");
let userScore = document.querySelector("#userScore");
let pcScore = document.querySelector("#pcScore");
let message = document.querySelector(".message");
const body = document.querySelector("body");
const startButton = document.querySelector("#start");
const input = document.querySelector(".input");
const user = document.querySelector("#user");
const gameContainer = document.querySelector(".gameContainer");
const error = document.querySelector(".error");
const reset = document.querySelector("#reset");
const computerHand = document.querySelector(".computerHand");

// EVENT LISTENERS

startButton.addEventListener("click", function () {
  validation();
});

handRock.addEventListener("click", function () {
  handRock = 0;
  choicePC();
});

handPaper.addEventListener("click", function () {
  handPaper = 1;
  choicePC();
});

handScissors.addEventListener("click", function () {
  handScissors = 2;
  choicePC();
});

reset.addEventListener("click", function () {
  resetGame();
});

// FUNCTIONS

const validation = () => {
  if (user.value.length < 0 || user.value.length == "") {
    errorValidation();
  } else {
    welcome();
  }
};

const welcome = () => {
  input.innerHTML = `<h6 class='subtitle'>Welcome <span class='redColor'>${user.value}</span>!</h6>`;
  showGame();
};

const errorValidation = () => {
  user.style.border = "2px solid red";
};

const showGame = () => {
  gameContainer.style.display = "block";
};

const choicePC = () => {
  let random = Math.floor(Math.random() * 3);
  logica(random);
};

const logica = (random) => {
  if (handRock == random) {
    userDraw();
  } else if (handRock == 0 && random == 1) {
    userLose();
  } else if (handRock == 0 && random == 2) {
    userWin();
  } else if (handPaper == random) {
    userDraw();
  } else if (handPaper === 1 && random === 0) {
    userWin();
  } else if (handPaper == 1 && random == 2) {
    userLose();
  } else if (handScissors == random) {
    userDraw();
  } else if (handScissors == 2 && random == 0) {
    userLose();
  } else if (handScissors == 2 && random == 1) {
    userWin();
  } else {
    console.log("error");
  }
};

const userDraw = () => {
  message.innerHTML = "Draw";
};

const userWin = () => {
  userScore.innerHTML = Number(userScore.innerHTML) + 1;
  message.innerHTML = "You win!";
};

const userLose = () => {
  pcScore.innerHTML = Number(pcScore.innerHTML) + 1;
  message.innerHTML = "You lose!";
};

const resetGame = () => {
  userScore.innerHTML = 0;
  pcScore.innerHTML = 0;
  message.innerHTML = `<p>CHAN CHAN...</p>`;
};
