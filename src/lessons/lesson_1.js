//lessons
const lesson1 = 'module exports and created files'
//modulos globales
const os = require('os')

//modulos propios
const creador_arch_1 = require('../modulos/creador_de_archivos/ej_1')
const creador_arch_2 = require('../modulos/creador_de_archivos/ej_2')
const creador_arch_3 = require('../modulos/creador_de_archivos/ej_3')

const ej_export_1 = require('../modulos/ej_exports/ej_1')
const ej_export_2 = require('../modulos/ej_exports/ej_2')
const ej_export_3 = require('../modulos/ej_exports/ej_3')


//ejecución de métodos
module.exports = (rutas) => {
    //datos
    let cpu = os.cpus()//usar module.exports = funcion....
    let sistema = os.platform()//usar al final module.exports.xxxxx = xxxxx
    let usuario = os.hostname()//usar exoport para cada función
    creador_arch_1(rutas.ruta_archivo1, cpu)
    creador_arch_2(rutas.ruta_archivo2, sistema)
    creador_arch_3(rutas.ruta_archivo3, usuario)

    ej_export_1.ej_1()
    ej_export_2.ej_2()
    ej_export_2.name()
    console.log('Felicidades! ', ej_export_3.nombre, ' has pasado fundamentos de exportación de módulos y creación de archivos')
    ej_export_3.process(lesson1)
}

