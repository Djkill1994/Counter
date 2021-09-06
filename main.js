const number = document.querySelector('.number-window');
const plusButton = document.querySelector('.plus-count');
const minusButton = document.querySelector('.minus-count');
const start = document.querySelector('.start');
let counterWindow = document.querySelector('.counter-window');
let clicks = 0;
counterWindow.style.visibility = 'hidden';

function startFunc() {
    if (counterWindow.style.visibility === 'hidden') {
        counterWindow.style.visibility = 'visible';
    } else {
        counterWindow.style.visibility = 'hidden';
    }
}

function clickPlus() {
    clicks += 1;
    number.innerHTML = clicks;
}

function clickMinus() {
    if (number.innerHTML === '0') {
        clicks += 0;
    } else {
        clicks -= 1;
        number.innerHTML = clicks;
    }
}

plusButton.addEventListener('click', clickPlus);
minusButton.addEventListener('click', clickMinus);
start.addEventListener('click', startFunc);