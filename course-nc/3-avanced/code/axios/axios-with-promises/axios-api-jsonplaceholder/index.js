

const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'

axios(url)
    //.then( response => response.json() )
    .then( data => showAPI(data) )
    .catch( err => console.log(err) )


const showAPI = (data) => {

    for (let i = 0; i < data.length; i++) {
        
        let containerAPI = document.getElementById('container-api')
        
        containerAPI.innerHTML += `
            <p> ${data[i].id} </p>
            <p> ${data[i].name} </p>
            <p> ${data[i].email} </p>
        `
        
    }

    console.log(data)

}