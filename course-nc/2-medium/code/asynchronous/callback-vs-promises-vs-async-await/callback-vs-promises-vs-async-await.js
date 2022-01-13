
// CALLBACKS 

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



// PROMISES

function requestHandlerJS(req, res) {
    // Consulta User
    User.findById(req.userId)
        // Si ok realizo una consulta .then (Entonces)
        // Consulto usuarios
        .then(function (user) {
            return tasks.findById(user.tasksId)
        })
        // Si usuarios ok consulto las tareas de ese usuario
        .then(function (tasks) {
            tasks.completed = true;
            return tasks.save();
        })
        .then(function () {
            res.send('Tareas completadas')
        })
        // El catch captura todos los errores de los then que haya
        // No es como los callback que se tiene que gestionar un error por cada consulta
        .catch(function (errors) {
            res.send(errors)
        })
}


// ASYNC - AWAIT

async function requesHandlerJS(req, res) {

    try {
        const user = await User.findById(req.userId);
        const tasks = await  Tasks.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        res.send('Task completed');
    } catch (error) {
        res.send(error);
    }
  
}