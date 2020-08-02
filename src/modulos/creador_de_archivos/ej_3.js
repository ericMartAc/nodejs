module.exports = function mostrar_usuario(archivo, usuario) {
    const fs = require('fs')
    fs.appendFile(archivo, JSON.stringify(usuario), (error) => {
        if (error) {
            console.log('error creando prueba_ej3.json')
        } else {
            console.log('creado prueba_ej3.json')
        }
    })
    let let_ = 'let enbebida en ej_3'
    let otraLet_ = 'otra let enbebida en ej_3'
}

function otra_funcion() {
    console.log('otra funcion activada en ej_3')
}
module.exports.otra_funcion = otra_funcion()