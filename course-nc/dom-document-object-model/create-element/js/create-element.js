
// Quering element container and saved in the constant
const containerMain = document.querySelector('.main') 

// Creating element H2
const H2Title = document.createElement('h2')
// Adding text to element
H2Title.innerText = ' This is a text added by code javascript, Managed with the DOM '

// Adding ot Deleting styles by code
//H2Title.classList.add('main')
//H2Title.classList.remove('main')

// Adding element H2 to container main
containerMain.appendChild(H2Title)

