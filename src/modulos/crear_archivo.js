module.exports = (cpu) => {
    const fs = require('fs');

    fs.appendFile('prueba.json', JSON.stringify(cpu), (error) => {
        if (error) {
            console.log('error')
        }
    })
}