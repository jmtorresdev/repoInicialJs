let usuarios=[
    {
        nombre:'Jose',
        edad:38,
        id:1
    },
    {
        nombre:'Maria',
        edad:30,
        id:2
    },
    {
        nombre:'Marta',
        edad:32,
        id:3
    },
];

let salarios=[
    {    
        id:1,
        salario:2000
    },
    {
        salario:2300,
        id:2
    }
];


let getUsuario=(id)=>{
    return new Promise((resolve,reject)=>{
        let usuario=usuarios.find(usuario=>usuario.id===id);
        if(usuario!=null){
            resolve(usuario);
        }else{
            reject(`El usuario ${usuario.id} no existe en base de datos`)
        }
    })
    
}

let getSalario=(usuario)=>{
    return new Promise((resolve,reject)=>{
        let salario=salarios.find(salario=>salario.id===usuario.id);
        if(salario!=null){
            let user={nombre:usuario.nombre,salario:salario.salario};
            resolve(user);
        }else{
            reject(`El usuario ${usuario.id} no tiene salario en base de datos`)
        }
    })
   
}

getUsuario(2)
        .then(usuario=>getSalario(usuario))
        .then(salario=>console.log(salario))
        .catch(err=>console.log(err));