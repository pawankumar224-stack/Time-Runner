let count = 0;
let displayValue = 0;
let startTimer;
let timer = document.getElementById('timer');
let format = document.getElementById('format');
let currentFormat = 'Sec';
format.style.fontSize = '60px';
timer.style.color = 'gold';
timer.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";


function reset(){
    clearInterval(startTimer);
    count = 0;
    timer.innerText = 0;
    currentFormat = 'Sec';
    format.innerText = 'Sec';
}

function start(){
    clearInterval(startTimer);
    count = 0;
    currentFormat = 'Sec';
    format.innerText = 'Sec';
    startTimer = setInterval(updateTimer, 1000);   
}

function carryOn(){
    clearInterval(startTimer);
    currentFormat = 'Sec';
    format.innerText = 'Sec';
    startTimer = setInterval(updateTimer, 1000);
}

function stop(){
    clearInterval(startTimer);
}

function updateTimer(){
    count++;
    displayTime();
}

function inMinutes(){
    currentFormat = "Mins";
    format.innerText = "Mins";
    displayValue = count;
    if(currentFormat === 'Mins'){
        displayValue = (count/60).toFixed(2);
    }
    timer.innerText = displayValue;
    timer.style.fontSize = '200px';
}

function inHours(){
    currentFormat = "Hrs";
    format.innerText = "Hrs";
    displayValue = count;
    if(currentFormat === 'Hrs'){
        displayValue = (count/3600).toFixed(2);
    }
    timer.innerText = displayValue;
    timer.style.fontSize = '200px';
}


function displayTime(){
    displayValue = count;
    timer.innerText = displayValue;
    timer.style.fontSize = '200px';
}