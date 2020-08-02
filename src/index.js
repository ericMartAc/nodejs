//modulos globales
const path = require('path')

//modulos propios
//const less_1 = require('./lesson_1')
const less_2 = require('./lessons/lesson_2')
const less_2_1 = require('./lessons/lesson_2_1')
const less_3 = require('./lessons/lesson_3')
const less_4 = require('./lessons/lesson_4')

//datos
const rutas = {
    ruta_archivo1: path.join(__dirname, 'docs/prueba_ej1.json'),
    ruta_archivo2: path.join(__dirname, 'docs/prueba_ej2.json'),
    ruta_archivo3: path.join(__dirname, 'docs/prueba_ej3.json')
}
const nombres = {
    nfrist: 'Eric',
    nsecond: 'Arturo'
}
const apellidos = {
    afrist: 'Martinez',
    asecond: 'Acelas'
}
let frist = { 'nombres': 'Eric Arturo' }
let second = { 'apellidos': 'Martinez Acelas' }
let personas = [
    require('lodash').assign(frist, second),
    { nombres: 'Luis Nibeht', apellidos: 'Castro Chavez', edad: 201 },
    { nombres: 'Julio Juan', apellidos: 'Maduro Coño', edad: 20 },
    { nombres: 'Michelin Mondonguis', apellidos: 'Culo Peluo', edad: 100 }
]
//less_1(rutas)
//less_2(rutas)
//less_2_1(rutas)
//less_3(frist, second, personas)
less_4()