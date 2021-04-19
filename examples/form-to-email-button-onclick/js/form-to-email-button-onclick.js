
//const $formB = document.querySelector('#form')

//$formB.addEventListener('submit', handleSubmit)

const $buttonMailtoOnClick = document.querySelector('#mailto')

function handleFormEmailOnClick() {
    

    const form = new FormData(this)
    console.log( form.get('name'), form.get('lastname') )
    $buttonMailtoOnClick.setAttribute('href', `mailto:andresganc@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('note')}`)
    $buttonMailtoOnClick.click()
}