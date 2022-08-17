
console.log('Hello NC')

const form01 = (e) => {

    e.preventDefault()
    console.log('Form 01')

    const inputName = document.getElementById('inputName')
    console.log('Input Name: ' + inputName)
}

function form02(e) {
    e.preventDefault()
    console.log('Form 02')
}