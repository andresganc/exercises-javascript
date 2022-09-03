
let numberCurrent

// GETS
// Display
const ContainertBottomValue = document.getElementById('display__bottom')
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
    ContainertBottomValue.appendChild(displayBottom)
}


export function basicOperator() {

}
