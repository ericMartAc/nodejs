module.exports = (archivo, cpu) => {
    const fs = require('fs')
    fs.appendFile(archivo, JSON.stringify(cpu), (error) => {
        if (error) {
            console.log('error creando prueba_ej1.json')
        } else {
            console.log('creado prueba_ej1.json')
        }
    })
}