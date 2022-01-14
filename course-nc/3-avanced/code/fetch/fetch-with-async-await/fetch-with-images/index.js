
const showAPI = async () => {
    
    try {

        const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'
        let dataAPI = await fetch(url)
        let data = await dataAPI.json()
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            
            let containerAPI = document.getElementById('container-api')
            containerAPI.innerHTML += `
                <p> ID: ${data[i].id} </p>
                <p> TITLE: ${data[i].title} </p>
                <p> IMAGE </p>
                <img src="${data[i].thumbnailUrl}" />
            `
        }
        
    } catch (error) {

        console.log(error)

    }
}

showAPI()