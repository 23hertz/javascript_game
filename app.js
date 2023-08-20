
const btn = document.getElementById('getForm')
let hints = document.getElementById('hints')
let randNum = Math.floor(Math.random() * 100)
let dispRand = document.getElementById('displayRand');
dispRand.innerHTML = `The rand Number is ${randNum}`
let dispAttempts = document.getElementById('attempts')
let totalAttempts = 5;

btn.addEventListener("submit", (e) => {
    e.preventDefault();

    let ans = document.getElementById('ans').value
    let dispAns = document.getElementById('displayAns');
    dispAns.innerHTML = `Your pick ${ans}`
    
    if(ans > randNum) 
    {
      dispAttempts.innerHTML = `Total Attempt remaining ${totalAttempts --}`
    }
    else if(ans < randNum)
    {
      dispAttempts.innerHTML = `Total Attempt remaining ${totalAttempts --}`
    }
    else
    {
      console.log('you win')
    }


})


// let noAttempts = 0;

// let guessed = false;
// 


//  do {
//   let question = Number(prompt("Enter a number"));
//   console.log(`this is the raandom number: ${randNum}`);
//   if (randNum < question) {
//     console.log("Your value is greater");
//     guessed = false;
//   } else if (randNum > question) {
//     console.log("Your value is lesser");
//     guessed = false;
//   } else {
//     console.log("correct");
//      guessed = true;

//   }
// } while (guessed === false);

//  console.log(`The total no of attempt is: ${noAttempts}`);

//   })
