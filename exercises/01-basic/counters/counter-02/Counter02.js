

// let counter = 0

// function setCounter(count) {
//     counter = count
//     const textCounter = document.querySelector('#text-counter')
//     textCounter.innerHTML = `${counter}`
// }
function addCounter(e) {

    let counter = 0
    const setCounter = (count) => {
        counter = count
        const textCounter = document.querySelector('#text-counter')
        textCounter.innerHTML = `${counter}`
    }
    e.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
    
}

function subCounter(e) {

    let counter = 0
    const setCounter = (count) => {
        counter = count
        const textCounter = document.querySelector('#text-counter')
        textCounter.innerHTML = `${counter}`
    }

    e.addEventListener('click', () => setCounter(counter - 1))
    setCounter(0)
}

document.querySelector('#id-counter-02').innerHTML = `

    <div>
        <h2>Counter 02</h2>
        <h3 id='text-counter'>${counter}</h3>
        <div>
            <button id='button-sub' type='button'>-</button>
            <button id='button-add' type='button'>+</button>
        </div>
    </div>

`

addCounter(document.querySelector('#button-add'))
subCounter(document.querySelector('#button-sub'))