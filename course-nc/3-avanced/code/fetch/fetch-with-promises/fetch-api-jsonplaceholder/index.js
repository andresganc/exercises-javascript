

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then( response => response.json() )
.then( data => {
    

    for (let i = 0; i < data.length; i++) {
        
        let element = document.getElementById('elem')
            element.innerHTML += `
            <li> ${data[i].id} </li>
            <li> ${data[i].name} </li>
            <li> ${data[i].email} </li>
            <br/>
        `

    }

    

    console.log(data)

})
.catch(err => console.log(err))