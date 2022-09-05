
let numberCurrent = '0'
let numberBefore = '0'

// GETS
// Display
const containertDisplayCurrent = document.getElementById('display__current')
const containertDisplayBefore = document.getElementById('display__before')
displayCurrent()
displayBefore()

// Buttons
const btn0 = document.getElementById('btn-0');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');

btn0.addEventListener('click', (e) => {
    e.preventDefault()
    numberCurrent = 0
    displayCurrent()
});

btn1.addEventListener('click', (e) => {
    e.preventDefault()
    numberCurrent = 1
    displayCurrent()
});

btn2.addEventListener('click', (e) => {
    e.preventDefault()
    numberCurrent = 2
    displayCurrent()
});

btn3.addEventListener('click', (e) => {
    e.preventDefault()
    numberCurrent = 3
    displayCurrent()
});

btn4.addEventListener('click', (e) => {
    e.preventDefault()
    numberCurrent = 4
    displayCurrent()
});

btn5.addEventListener('click', (e) => {
    e.preventDefault()
    numberCurrent = 5
    displayCurrent()
});

btn6.addEventListener('click', (e) => {
    e.preventDefault()
    numberCurrent = 6
    displayCurrent()
});

btn7.addEventListener('click', (e) => {
    e.preventDefault()
    numberCurrent = 7
    displayCurrent()
});

btn8.addEventListener('click', (e) => {
    e.preventDefault()
    numberCurrent = 8
    displayCurrent()
});

btn9.addEventListener('click', (e) => {
    e.preventDefault()
    numberCurrent = 9
    displayCurrent()
});


function displayCurrent() {
    const displayCurrent = document.createElement('h1')
    displayCurrent.innerHTML = numberCurrent
    containertDisplayCurrent.appendChild(displayCurrent)
}

function displayBefore() {
    const displayBefore = document.createElement('h3')
    displayBefore.innerHTML = numberBefore
    containertDisplayBefore.appendChild(displayBefore)
}

function basicOperator() {

}
