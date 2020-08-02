//modulos globales
const path = require('path')

//modulos propios
const less_1 = require('./lesson_1')
const less_2 = require('./lesson_2')

//datos
const rutas = {
    ruta_archivo1: path.join(__dirname, 'prueba_ej1.json'),
    ruta_archivo2: path.join(__dirname, 'prueba_ej2.json'),
    ruta_archivo3: path.join(__dirname, 'prueba_ej3.json')
}

less_2(rutas)