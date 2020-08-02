//modulos globales
const os = require('os')

//modulos propios
const export_1 = require('./modulos/creador_de_archivos/ej_1')
const export_2 = require('./modulos/creador_de_archivos/ej_2')
const export_3 = require('./modulos/creador_de_archivos/ej_3')

//datos
let cpu = os.cpus()//usar module.exports = funcion....
let sistema = os.platform()//usar al final module.exports.xxxxx = xxxxx
let usuario = os.hostname()//usar exoport para cada función

//ejecución de métodos
export_1(cpu)
export_2(sistema)
export_3(usuario)


