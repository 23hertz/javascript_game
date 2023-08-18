//const form = document.getElementById('getForm')

//let ans = console.log("Enter random number from 1-100: ", randNum);

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

// let question =document.getElementById("question").value;

let noAttempts = 0;

let guessed = false;
let randNum = Math.floor(Math.random() * 100);
console.log(randNum);

do {
  let question = Number(prompt("Enter a number"));
  noAttempts++
  if (randNum < question) {
    console.log("Your value is greater");
    guessed = false;
  } else if (randNum > question) {
    console.log("Your value is lesser");
    guessed = false;
  } else {
    console.log("correct");
    guessed = true;
    break
  }
} while (guessed === false);

 console.log(`The total no of attempt is: ${noAttempts}`);

//   });
