
// VIEW
document.querySelector('#id-counter-02').innerHTML = `
    <div>
        <h2>Counter 02</h2>
        <h3 id='textCounter'>0</h3>
        <div>
            <button id='buttonSub' type='button'>-</button>
            <button id='buttonAdd' type='button'>+</button>
        </div>
        <div>
            <button id='buttonReset' type='button'>Reset</button>
        </div>
    </div>
`;


// CODE
let counter = 0;

let textCounter = document.querySelector('#textCounter')
let buttonAdd = document.querySelector('#buttonAdd')
let buttonSub = document.querySelector('#buttonSub')
let buttonReset = document.querySelector('#buttonReset')

buttonAdd.addEventListener('click', () => {
    counter++
    textCounter.innerHTML = counter
})

buttonSub.addEventListener('click', () => {
    counter--
    textCounter.innerHTML = counter
})

buttonReset.addEventListener('click', () => {
    counter = 0
    textCounter.innerHTML = counter
})