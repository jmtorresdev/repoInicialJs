const fs=require('fs');
let operaciones=(function(){

    let crearArchivo=(base,limite,nombreFichero)=>{
        return new Promise((resolve,reject)=>{
           
            if(!Number(base)){reject("La base no es un valor numérico")}
            if(!Number(limite) && limite!=null){reject("Se ha pasado un valor no numérico")}
            if(limite==null){limite=10;}
            let data="";
            for(let i=0;i<limite;i++){
                data+=`${base}x${i}=${base*i}\n`;
            }
    
            fs.writeFile(nombreFichero,data,(err)=>{
                if(err) reject("No se ha podido crear el fichero")
                resolve(`El fichero ${nombreFichero} ha sido creado con éxito`)
            })
        })
      
    }

    return {crearArchivo};
})()

module.exports=operaciones;