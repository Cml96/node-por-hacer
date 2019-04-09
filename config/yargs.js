const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente una tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', descripcion)
    .command('actualizar', 'Actualizar el estado completando una tarea', descripcion, completado)
    .command('borrar', 'Borrar una tarea', descripcion)
    .help()
    .argv;


module.exports = {
    argv
}