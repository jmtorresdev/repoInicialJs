const matematicas=require('./matematicas');
let objeto={
    nombre:'Josemi',
    apellidos:'Torres',
    edad:38,
    getEdad:function(){
        return this.edad;
    }
}

let {nombre,apellidos,edad}=objeto;
console.log(nombre);
console.log(apellidos);

console.log('edad',objeto.getEdad())

function getNombre(counter){
    
    function getCounter(suma){
        return counter+suma;
    }
    return getCounter;
}

let funcion=getNombre(3);
console.log(funcion(2));

console.log(matematicas.sumar(2,3))
console.log(matematicas.restar(2,3))
console.log(matematicas.multiplicar(2,3))
console.log(matematicas.incrementarContador(5))
console.log(matematicas.resetContador())






