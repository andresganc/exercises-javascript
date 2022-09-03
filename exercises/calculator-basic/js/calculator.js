
let numberCurrent = '0'
let numberBefore = '0'


// GETS
// Display
const ContainertDisplayCurrent = document.getElementById('display__current')
const ContainertDisplayBefore = document.getElementById('display__before')
// Buttons
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')

btn1.addEventListener("click", (e) => {
    e.preventDefault()
    numberCurrent = 1
    display()
});

btn2.addEventListener("click", (e) => {
    e.preventDefault()
    numberCurrent = 2
    display()
});



function display() {
    const displayBottom = document.createElement('h1')
    displayBottom.innerHTML = numberCurrent
    ContainertDisplayCurrent.appendChild(displayBottom)
}


export function basicOperator() {

}
