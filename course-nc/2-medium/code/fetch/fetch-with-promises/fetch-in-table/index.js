
const url = 'https://jsonplaceholder.typicode.com/photos'
const url2 = 'https://jsonplaceholder.typicode.com/users'

fetch(url2)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(err => console.log(err))



const showData = (data) => {

    for (let i = 0; i < data.length; i++) {
        
        document.getElementById('data').innerHTML += `
            <tr>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
            </tr>
        `
         
    }

    console.log(data)

}