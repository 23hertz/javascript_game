
const btn = document.getElementById('getForm')
let hints = document.getElementById('hints')
let randNum = Math.floor(Math.random() * 100)
let dispRand = document.getElementById('displayRand');
dispRand.innerHTML = `The rand Number is ${randNum}`
let dispAttempts = document.getElementById('attempts')
let totalAttempts = 1;
let answer = false
let allowed_attempt = 5;

btn.addEventListener("submit", (e) => {
    e.preventDefault();
    let dispAns = document.getElementById('displayAns');


    let ans = document.getElementById('ans').value
    dispAns.innerHTML = `Your pick ${ans}`

    if(ans > randNum) 
    {
      dispAttempts.innerHTML = `Total Attempt made ${totalAttempts ++}`
      answer = false
    }
    else if(ans < randNum)
    {
      dispAttempts.innerHTML = `Total Attempt made ${totalAttempts ++}`
      answer = false
    }
    else
    {
      answer = true
      dispAttempts.innerHTML =`you win and made ${totalAttempts} attempts`
    }
    
})


