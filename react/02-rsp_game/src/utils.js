export function random(n) {
  return Math.ceil(Math.random() * n);
}
const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

export function compareHand(a, b) {
  if (WINS[a] == b) return 1;
  if (WINS[b] == a) return -1;
  return 0;
}

export function generateRandomHand() {
  const num = random(3);
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "scissor";
  } else {
    return "paper";
  }
}
/* 
    0.00000001~ 0.999999999999999999999-기본
    0.00000001~2.999999999999 -*3
    1.00000000001~ 3.999999999999999 
*/
