

const showAPI = async() => {
    
    try {

        const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
        let data = await axios(url)

        for (let i = 0; i < data.length; i++) {
        
            let containerAPI = document.getElementById('container-api')
            
            containerAPI.innerHTML += `
                <p> ${data[i].id} </p>
                <p> ${data[i].name} </p>
                <p> ${data[i].email} </p>
            ` 
        }
    
        console.log(data)
        
    } catch (error) {

        console.log(error)
        
    }

}

showAPI()