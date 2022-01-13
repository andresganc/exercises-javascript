

const url = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(url)
.then( response => response.json() )
.then( data => {
    

    let element = document.getElementById('elem')
    element.innerHTML = `
    <p> ${data.id} </p>
    <p> ${data.title} </p>
    <p> ${data.body} </p>
    `

    console.log(data)

})
.catch(err => console.log(err))