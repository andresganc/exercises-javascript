
// ============== CALLBACKS ==============
/*
Los callbacks son el inicio para manejar la asincronia
algunos de los inconvenientes es que generan un codigo piramidal

- Los callbacks se crearon para solucionar el codigo piramidal y poco legible
    de los callback. Los famosos callback-hell 

- Las callbacks son funciones con parametros que tienen internamente
req y res 
(Request - response)
(Requerimiento - Respuesta)
.then si es ok
.catch si es error

*/

function requestHandler1(req, res) {
    // Consulta
    User.findById(req.userId, function(err, user){
        if (err) {
            res.send(err);
        } else {
            // Si anterior consulta es ok realiza otra consulta si se desea
            Tasks.findById(user.tasksId, function(err, task){
                if (err) {
                    return res.send(err);
                } else {
                    // Si anterior consulta es ok se puede realizar otra consulta si se desea
                    // Se asignar valores si se desea 
                    task.completed = true;
                    // Guardar valores
                    // Y se puede hacer una ultima consultas que no devuelva mas resultados. Que solo haga la consulta y verifique si da error
                    task.save(function(err){
                        if (err) {
                            return res.send(err);
                        } else {
                            // Si ok se envia mensaje de tarea completada
                            res.send('Task Completed')
                        }
                    })
                }
            })
        }
    })
}