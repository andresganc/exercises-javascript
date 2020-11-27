
// =========== PROMISES ============
/*
- Las promesas se crearon para solucionar el codigo piramidal y poco legible
    de los callback. Los famosos callback-hell 

- Las promesas son funciones con parametros req y res (Requerimiento - Respuesta) que tienen internamente un 
.then si es ok
.catch si es error

*/


function requestHandler(req, res) {
    // Consulta User
    User.findById(req.userId)
        // Si ok realizo un .then (Entonces)
        .then(function (user){
            res.send(user)
        })
        .catch(function(err){
            res.send(err)
        })
}