

function handleFormEmailOnClick(event) {

    event.preventDefault()

    const $buttonMailto = document.querySelector('#mailto')

    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('phone').value;
    let nota = document.getElementById('note').value;
    console.log(nombre, apellido, email, nota)

    window.alert('Formulario gestionado por email: Se abrira la venta de email para enviar')
    
    $buttonMailto.setAttribute('href', `mailto:andresganc@gmail.com?subject=${nombre} ${apellido}&body= ${email} ${telefono} ${nota}`)
    $buttonMailto.click()
}