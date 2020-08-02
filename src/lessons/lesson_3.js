function f1(frist, second, personas) {
    const _ = require('lodash')
    console.log('f1 activada')

    let name = _.assign(frist, second)
    let buscador = _.find(personas, { nombres: 'Michelin Mondonguis' })
    console.log(name)
    console.log(buscador)
}

module.exports = (frist, second, personas) => {
    let comando = process.argv
    console.log('f2 activada')
    console.log(comando)
    if (comando[2] === 'Eric') {
        f1(frist,second,personas)
    } else {
        console.log('usuario invalido')
    } 
}