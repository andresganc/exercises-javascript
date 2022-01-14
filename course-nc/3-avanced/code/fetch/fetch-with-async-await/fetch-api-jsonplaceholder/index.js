
const showData = async () => {

    try {

        const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
        let dataAPI = await fetch(url)
        let dataJson = await dataAPI.json()
        console.log(dataJson)

        for (let i = 0; i < dataJson.length; i++) {

            let containerAPI = document.getElementById('container-api')

            containerAPI.innerHTML += `
            <p> ${dataJson[i].id} </p>
            <p> ${dataJson[i].name} </p>
            <p> ${dataJson[i].email} </p>
            <p> ${dataJson[i].body} </p>
            <br/><br/>
            
        `

        }


    } catch (error) {

        console.log(error)

    }
}

showData()