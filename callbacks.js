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


let getUsuario=(id,callback)=>{
    let usuario=usuarios.find(usuario=>usuario.id===id);
    if(usuario!=null){
        callback(usuario);
    }else{
        callback(null,`El usuario ${usuario.id} no existe en base de datos`)
    }
}

let getSalario=(usuario,callback)=>{
    let salario=salarios.find(salario=>salario.id===usuario.id);
    if(salario!=null){
        let user={nombre:usuario.nombre,salario:salario.salario};
        callback(user);
    }else{
        callback(null,`El usuario ${usuario.id} no tiene salario en base de datos`)
    }
}

getUsuario(1,(usuario,err)=>{
    if(err) return console.log(err);
    getSalario(usuario,(salario,err)=>{
        if(err) return console.log(err);
        console.log(salario);
    })
})