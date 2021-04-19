
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#mailto')
$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name', 'lastname', 'email', 'phone', 'note'))
    $buttonMailto.setAttribute('href', `mailto:andresganc@gmail.com?subject=${form.get('name')} ${form.get('lastname')}&body= ${form.get('email')} ${form.get('phone')} ${form.get('note')}`)
    $buttonMailto.click()
}