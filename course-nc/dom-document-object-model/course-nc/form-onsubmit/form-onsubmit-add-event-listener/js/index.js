


const myForm = document.getElementById('myForm');
console.log(myForm);

myForm.addEventListener("submit", function (e) {

    e.preventDefault();
    console.log('Event : ', e)

    const inputName = document.getElementById('inputName').value;
    const inputLastName = document.getElementById('inputLastName').value;
    const inputEmail = document.getElementById('inputEmail').value;

    console.log('Form OnSubmit Add Event Listener Name: ', inputName, ' Last Name: ', inputLastName, ' Email: ', inputEmail );
    window.alert('Form OnSubmit Add Event Listener Name: ' + inputName + ' Last Name : ' + inputLastName + ' Email :' + inputEmail);
    
});
