
const url1 = 'https://pokeapi.co/api/v2/ability/4'
const url2 = 'https://jsonplaceholder.typicode.com/albums/1/photos'

fetch(url2)
    .then( response => response.json() )
    .then( data => showAPI(data) )
    .catch( err => console.log(err) )



const showAPI = (data) => {

    
    for (let i = 0; i < data.length; i++) {
        
        document.getElementById('container-api').innerHTML += `
        <li> ID : ${data[i].id}</li>
        <li> TITLE : ${data[i].title}</li>
        <p> IMAGE </p>
        <img src="${data[i].thumbnailUrl}"></img>
        <br/><br/><br/>
    `
        
    }
    
    console.log(data)

}