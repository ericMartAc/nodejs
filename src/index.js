//modulos globales
const path = require('path')

//modulos propios
//const less_1 = require('./lesson_1')
const less_2 = require('./lessons/lesson_2')
const less_2_1 = require('./lessons/lesson_2_1')

//datos
const rutas = {
    ruta_archivo1: path.join(__dirname, 'docs/prueba_ej1.json'),
    ruta_archivo2: path.join(__dirname, 'docs/prueba_ej2.json'),
    ruta_archivo3: path.join(__dirname, 'docs/prueba_ej3.json')
}
//less_1(rutas)
//less_2(rutas)
less_2_1(rutas)