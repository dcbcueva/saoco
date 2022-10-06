console.log("JS07 Asincronia");

console.log("01-Primera Instrucción");

//SetTimeout( Funcion Callback, tiempo_para_ejecutar(ms) );
//setTimeout(()=>console.log("01.5 Holi Crayoli"),3000);
const temporizador =(retardo,msj)=>{
    setTimeout(()=>console.log(msj),retardo);
}

const intervalo=(tiempo,msj)=>{
    setInterval(()=>console.log(msj),tiempo);
}

//temporizador(5000,"02-Segunda Instrucción");
//intervalo(2000,"02-Segunda Instrucción")

console.log("03-Tercera Instrucción");


//********************************************************
// API FETCH.   
console.log("01.-Antes de la solicitud de fetch");
function solicitudFetch(userToFind){
    fetch("https://reqres.in/api/users?delay=3")
        .then(response=>response.json())
        .then(conversion=>{
            //console.log(conversion)
            //Buscando a Michale
            //console.log(conversion.data[0].email);
            //console.log(conversion.data[0].first_name);
            // let{email, first_name}=conversion.data[0];
            //console.log(first_name,email);
            //console.log(conversion); 
            
            let encontrado = conversion.data.find(data=> data.first_name===userToFind);
            console.log(encontrado);

            let objUser=document.getElementById("user-name");
            let objEmail=document.getElementById("user-email");

            objUser.value=`${encontrado.first_name} `;
            objEmail.value = `${encontrado.email}`;
            usarLocalStorage();
            return "hola";
    })
    .then(msj => console.log("Retorno del then anterior: "+msj))
    .catch(err=>{console.log(err)});
}
console.log("03.-Despues de la solicitud de fetch");
//let soliciDone=false;
function leerUsuario(usuario){

    console.log("Usuario a buscar: "+usuario);
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.time > Date.now()){
        leerLocalStorage();
    }
    else {
        solicitudFetch(usuario);
        //setTimeout(4500);
        //soliciDone=true;
        //setTimeout(usarLocalStorage(),4500);
        
    }
}

function usarLocalStorage(){
    let objUser=document.getElementById("user-name");
    let objEmail=document.getElementById("user-email");
    // localStorage.setItem('clave',valor)
    let user={
        name:objUser.value,
        email:objEmail.value,
        time: Date.now()+60000  //leer el tiempo actual y sumarle 1 minuto.
    }
    localStorage.setItem("name",objUser.value);
    localStorage.setItem("email",objEmail.value);
    //Para convertir un objeto a JSON : JSON.stringify(objeto)
    localStorage.setItem("user",JSON.stringify(user));
}

function leerLocalStorage(){
    const objUser=document.getElementById("user-name");
    const objEmail=document.getElementById("user-email");

    //Convertir de JSON a objeto: JSON.parse(texto);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    objUser.value=`${user.name} `;
    objEmail.value = `${user.email}`;
}

function miPromesa(){
    let promesa= new Promise((resolve,reject)=>{
        const expresion = false;
        if(expresion) resolve("La promesa fue éxitosa");
        else reject("La promesa No se resolvió");
    });
    promesa
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
    .finally(console.log("Se terminó de ejecutar la promesa"));
}
//miPromesa();

let division =(a,b)=>{
    return new Promise((resolve,reject)=>{
        if(b!==0)resolve(a/b);
        else reject("No se puede realizar una división entre cero");
    })
}
/* division(4,0)
.then(resultado=>console.log("El resultado de la div= "+resultado))
.catch(error=>console.log("Error en la divison: "+error))

division(4,2)
.then(resultado=>console.log("El resultado de la div= "+resultado))
.catch(error=>console.log("Error en la divison: "+error)) */
//Async, await.
async function operaciones(){
    try{
    const result1= await division(4,0);
    console.log("El resultado de la div entre 0 es: "+result1);
    }
    catch(error){
        console.log("No se puede realizar la división"+error)
    }
    try{
    const result2= await division(4,2);
    console.log("El resultado de la div entre 2 es: "+result2);
    }
    catch(error){
        console.log("No se puede realizar la división"+error)
    }
}
operaciones();

/* fetch("https://reqres.in/api/users?delay=3")
    .then(response => response.json())
    .then(users => printUsers(users.data))

console.log("03 - Después de fetch")

const printUser = (avatar_url, id, email, first_name, last_name) => {
    return `<div class="col-3 card my-2 mx-2">
                <img src="${avatar_url}" class="card-img-top"></img>
                <div class="card-body">
                    <p>Id: ${id}</p>
                    <p>email: ${email}</p>
                    <p>First name: ${first_name}</p>
                    <p>Last name: ${last_name}</p>
                </div>
            <div/>`
}

const printUsers = (users) => {
    const container = document.getElementById("users-container")
    for (let user of users) {
        container.innerHTML += printUser(user.avatar, user.id, user.email, user.first_name, user.last_name)
    }
} */

