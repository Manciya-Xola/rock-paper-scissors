import { getRandomNumber } from "../utils/common";

const choices = ["rock", "paper", "scissors"];
// const randomNumber = getRandomNumber(0, 2);
// const computerChoice = choices[randomNumber];

function playRound(move) {
  const randomNumber = getRandomNumber(0, 2);
  const computerChoice = choices[randomNumber];

  let round = { move, computerChoice, winner: null };

  if (move === computerChoice) {
    round.winner = "draw";
  } 
  else if (
    (move === "rock" && computerChoice === "scissors") ||
    (move === "paper" && computerChoice === "rock") ||
    (move === "scissors" && computerChoice === "paper")
  ) {
    round.winner = "player";
  } else {
    round.winner = "computer";
  }
  return round;
}
export {playRound};

