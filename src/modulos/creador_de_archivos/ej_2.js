module.exports = function ej_2(archivo, sistema) {
    const fs = require('fs')
    fs.appendFile(archivo, JSON.stringify(sistema), (error) => {
        if (error) {
            console.log('error en creación de prueba_ej2.json')
        } else {
            console.log('creado prueba_ej2.json')
        }
    })
}