function ej_2() {
    console.log('exportado a varias funciones: ej_2')
}
function name() {
    console.log('otra funcion desde ej_2')
}

module.exports.ej_2 = ej_2
module.exports.name = name