let matematicas=(function(){
    let _counter=0;

    let sumar=(num1=0,num2=0)=>{
        return num1+num2;
    }

    let restar=(num1=0,num2=0)=>{
        return num1-num2;
    }

    let multiplicar=(num1=0,num2=0)=>{
        return num1*num2;
    }

    let incrementarContador=function(unidades=0){
        _counter=_counter+unidades;
        return _counter;
    }

    let resetContador=function(){
        _counter=0;
        return _counter;
    }

    return {sumar,restar,multiplicar,incrementarContador,resetContador}

})();

module.exports=matematicas;