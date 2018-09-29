let operaciones=require('./operaciones');
let {crearArchivo}= operaciones;

crearArchivo(1,null,'../tablas/tabla_1.txt')
            .then(respuesta=>console.log(respuesta))
            .catch(err=>console.log(err));