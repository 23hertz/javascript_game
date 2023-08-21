
const btn = document.getElementById('getForm')
let hints = document.getElementById('hints')
let randNum = Math.floor(Math.random() * 100)
let dispRand = document.getElementById('displayRand');
dispRand.innerHTML = `The rand Number is ${randNum}`
let dispAttempts = document.getElementById('attempts')
let totalAttempts = 1;
let answer = false

btn.addEventListener("submit", (e) => {
    e.preventDefault();

    let ans = document.getElementById('ans').value
    let dispAns = document.getElementById('displayAns');
    dispAns.innerHTML = `Your pick ${ans}`

    
    if(ans > randNum) 
    {
      dispAttempts.innerHTML = `Total Attempt remaining ${totalAttempts ++}`
      answer = false
    }
    else if(ans < randNum)
    {
      dispAttempts.innerHTML = `Total Attempt remaining ${totalAttempts ++}`
      answer = false
    }
    else
    {
      answer = true
      console.log(`you win and made ${totalAttempts}`)
    }
    
})


