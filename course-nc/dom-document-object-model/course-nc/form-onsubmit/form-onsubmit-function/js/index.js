
function submitFunction(e) {
    
    const inputName = document.getElementById('inputName').value;
    const inputLastName = document.getElementById('inputLastName').value;
    const inputEmail = document.getElementById('inputEmail').value;

    console.log('Form OnSubmit Function Name: ', inputName, ' Last Name: ', inputLastName, ' Email: ', inputEmail );
    window.alert('Form OnSubmit Function Name: ' + inputName + ' Last Name : ' + inputLastName + ' Email :' + inputEmail);

    e.preventDefault();
}

