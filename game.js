import prompt from "prompt-sync";
// const promptSync = prompt({ sigint: true });
const promptSync = prompt();

setTimeout(() => {
  Game();
}, 2000);

console.clear();

console.log(
  `Welcome to Bulls&Cows! \n \n Please type your 4 digits Number (0-9). \n A bull means the correct number is at the correct position; a cow means a correct number is at the wrong position`
);

function getRandomNumber() {
  let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return numberArray
    .sort(() => Math.random() - 0.5)
    .join("")
    .slice(0, 4)
    .toString();
}

let attempts = 0;

let computerNumber = getRandomNumber();

function Game() {
  console.log("");
  //console.log(" the random number is:", computerNumber);

  let giveANumber = promptSync(
    " What's your number? (4 characters and unique numbers, please): "
  );
  let num = giveANumber;

  let newNum = Number(num);

  const arrComputerNum = computerNumber.split("");
  const arrNewNum = num.split("");

  const areNumbersInArrNewNumUniques =
    new Set(arrNewNum).size === arrNewNum.length;

  const whileTryAgainCondition =
    isNaN(newNum) ||
    num.length !== 4 ||
    num === undefined ||
    !areNumbersInArrNewNumUniques;
  const whileBreakCondition =
    !isNaN(newNum) &&
    num.length === 4 &&
    num !== undefined &&
    areNumbersInArrNewNumUniques;

  while (whileTryAgainCondition) {
    console.log(
      " Please try again, this is not a valid input (please type 4 unique numbers)"
    );
    attempts++;
    console.log(` Attempts: ${attempts}`);
    Game();
    return;
    if (whileBreakCondition) {
      break;
    }
  }
  startGame();

  function startGame() {
    let bulls = 0;
    let cows = 0;

    if (computerNumber == num) {
      attempts++;
      console.clear();
      console.log(` You are the winner" with ${attempts} attempts`);
      reset();
      return;
    } else if (computerNumber != num) {
      for (let i = 0; i < arrNewNum.length; i++) {
        if (computerNumber.charAt(i) == num.charAt(i)) {
          bulls++;
        }
      }

      const checkIfArraysContainTheSameNumbers = () => {
        for (let i = 0; i < arrComputerNum.length; i++) {
          if (
            arrNewNum.includes(arrComputerNum[i]) &&
            arrNewNum[i] !== arrComputerNum[i]
          ) {
            cows++;
          }
        }
      };
      checkIfArraysContainTheSameNumbers();
    }
    attempts++;
    console.log(` Bulls: ${bulls}, Cows: ${cows}, Attempts: ${attempts}`);
    Game();
  }

  function reset() {
    const giveAnswer = promptSync(
      " Play again? yes (play again) / no (finished): "
    );
    let answer = giveAnswer;
    if (answer.toLowerCase() === "yes") {
      attempts = 0;
      computerNumber = getRandomNumber();
      console.clear();
      Game();
    } else if (answer.toLowerCase() === "no") {
      console.clear();
      console.log(" See you next time");
      return;
    } else {
      reset();
      return;
    }
  }
}
