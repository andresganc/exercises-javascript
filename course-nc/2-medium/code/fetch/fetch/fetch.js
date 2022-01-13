
/*
FETCH - CONEXIONES API EN JAVASCRIPT

- Fetch es una libreria nativa de javascript para hacer conexiones HTTP

- No es necesario importar librerias externas como axios etc.

- Devuelve una promesa por default pero tambien se puede trabajar con Async Await

*/


// Example fetch
fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));


// Example with catch
fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

  
