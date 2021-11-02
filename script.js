const timer = document.getElementById('timer');
const stopButton = document.getElementById('stop');
const continueButton = document.getElementById('continue')

function setZero(date){
    if ((date+"").length === 1){
        return `0${date}`
    }
    return date;
}

let date = new Date();
timer.innerHTML = date.getHours() + ":" + setZero(date.getMinutes()) + ":" + setZero(date.getSeconds());

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