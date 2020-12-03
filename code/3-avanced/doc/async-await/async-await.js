
// ======== ASYNC AWAIT ==========
/*
Con el async await se soluciono el callback hell
En el callback y promises las consultas se recibian en la funcion en el 
async await se puede recibir en una const, variable etc.
solo es asignar a la funcion principal async y a la consulta await

ej:

async function myFuntion(req, res) {
    await User.findById(req.userId)
}
*/

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