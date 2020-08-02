
module.exports = (archivo) => {
    //lesson
    const lesson2 = 'fs asynchronous and synchronous'

    //modulos globales
    const os = require('os')
    const fs = require('fs')
    const environment = os.platform()+" "+os.arch
    fs.readFile(archivo.ruta_archivo2, 'utf-8', (error, data) => {
        if (error) {
            const less1 = require('./lesson_1')
            less1(archivo)
            console.log('ejecutando escritura de arquitectura')
            fs.writeFile(archivo.ruta_archivo2, JSON.stringify(environment), 'utf-8',()=>{
                console.log(lesson2,' is Successfull!')
            })

        }

    })
}