const os = require('os')
const fs_ = require('./modulos/crear_archivo')

let cpu = os.cpus()
let sistema = os.platform()
let usuario = os.hostname()

fs_(cpu)


