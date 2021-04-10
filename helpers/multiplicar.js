const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');

colors.setTheme({
    header: 'green',
    text: ['grey', 'underline'],
    multiplicar: 'yellow'
})

const crearArchivo = async(base, listar = false, hasta = 10) => {
    try {

        let salida = '';
        let consola = '';

        for(let i=1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.multiplicar} ${i} = ${base*i}\n`;
        }
        
        if(listar){
            console.log('================='.header)
            console.log('Tabla del:'.text, base)
            console.log('================='.header)

            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

// const crearArchivo2 = (base = 5) => {

//     return new Promise((resolve, reject) => {
        
//         if(base){
//             console.log('=================')
//             console.log('Tabla del:', base)
//             console.log('=================')

//             let salida = '';

//             for(let i=1; i<=10; i++){
//                 salida += `${base} x ${i} = ${base*i}\n`;
//             }
        
//             console.log(salida);
        
//             fs.writeFileSync(`tabla-${base}.txt`, salida);
        
//             resolve(`tabla-${base}.txt`);
//         }else{
//             reject(`Error al querer crear la tabla`);
//         }
//     });
// }

module.exports = {
    crearArchivo
}