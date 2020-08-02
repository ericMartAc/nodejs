module.exports = (cpu) => {
    const fs = require('fs')
    fs.appendFile('prueba_ej1.json', JSON.stringify(cpu), (error) => {
        if (error) {
            console.log('error creando prueba_ej1.json')
        } else {
            console.log('creado prueba_ej1.json')
        }
    })
}