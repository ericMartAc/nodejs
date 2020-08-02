module.exports = (frist, second, personas) => {
    const _ = require('lodash')

    let name = _.assign(frist, second)
    let buscador = _.find(personas, { nombres: 'Michelin Mondonguis' })
    console.log(name)
    console.log(buscador)
}