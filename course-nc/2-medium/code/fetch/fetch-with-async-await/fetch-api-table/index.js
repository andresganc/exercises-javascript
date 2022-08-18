
const showAPI = async () => {
    
    try {

        const url = 'https://jsonplaceholder.typicode.com/todos'
        let dataAPI = await fetch(url)
        let data = await dataAPI.json()
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            
            let tBodyData = document.getElementById('tbody-data')
            tBodyData.innerHTML += `
                <tr>
                <td> ${data[i].id} </td>
                <td> ${data[i].completed} </td>
                <td> ${data[i].title} </td>
                </tr>
            `
            
        }
        
    } catch (error) {

        console.logo(error)
        
    }
}

showAPI()