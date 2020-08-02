module.exports = (archivo) => {
    const fs = require('fs')

    console.log('iniciando desde lesson_2_1')
    /*
    fs.readFileS(archivo.ruta_archivo1,(error,data)=>{
        if (!error) {
            console.log(data)
        }
        if (error) {
            console.log('error leyendo el archivo desde lesson_2_1')
        }
    })
    */
   let lectura = fs.readFileSync(archivo.ruta_archivo1,'utf-8')
   console.log(lectura)
    console.log('Finalizado lectura de archivo desde 2_1')
}