
import fetch from 'node-fetch'

const url = 'https://jsonplaceholder.typicode.com/todos'

fetch(url)
    .then( response => response.json() )
    .then( data => console.log(data) )
    .catch( err => console.log(err) )