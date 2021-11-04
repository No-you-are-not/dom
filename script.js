const container = document.getElementById('container')
// const timer = document.getElementById('timer');
// const stopButton = document.getElementById('stop');
// const continueButton = document.getElementById('continue')
//


function setZero(date){
    if ((date+"").length === 1){
        return `0${date}`
    }
    return date;
}


    let timer = document.createElement('h2');
    timer.setAttribute('class', 'timer');
    let date = new Date();
    timer.innerHTML = date.getHours() + ":" + setZero(date.getMinutes()) + ":" + setZero(date.getSeconds());
    let stopButton = document.createElement('button');
    stopButton.setAttribute('class', 'button stop');
    stopButton.innerHTML = 'Stop'
    let continueButton = document.createElement('button');
    continueButton.setAttribute('class', 'button continue');
    continueButton.innerHTML = 'Continue';
    container.appendChild(timer);
    container.appendChild(stopButton);
    container.appendChild(continueButton);




function myTimer (){
    let today = new Date();
    let time = today.getHours() + ":" + setZero(today.getMinutes()) + ":" + setZero(today.getSeconds());
    timer.innerHTML = time;
}

function stopTimer (){
    clearInterval(timerGoing);
}

function continueInterval (){
    timerGoing = setInterval(myTimer, 1000);
}

let timerGoing = setInterval(myTimer, 1000);

stopButton.addEventListener('click', stopTimer);

continueButton.addEventListener('click',  continueInterval)