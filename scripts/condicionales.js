console.log("Sessión JS03 Condicionales");

//++++++++++++++Declaración de bloque+++++++++++++++++++++
let nombre="Diego";
let ciudad="Guadalajara"
{
    const listado =["Olivia","Benja","Luis","Linda"];
    let nombre = "Fer";
    let ciudad = "CDmx";
    let apellido = "Palapa";
    console.log(`Mi nombre es ${nombre} ${apellido}, vive en ${ciudad}`); // Fer CDmx
}
console.log(`Participante: ${nombre}, que vive en ${ciudad}`); //Diego GDL

//++++++++++++++Declaración de bloque+++++++++++++++++++++
/**
 *      Sintaxis:
 *          if(condicionVerdadera) instrucion;
 *          
 *          if(condicionVerdadera){
 *              instrucciones;
 *          }
 */
let edad=27;
console.log("***Declaración antes del if--->");
if(edad>24) console.log("La edad es mayor a 25");
else{
    console.log("La edad es menor a 25");
    console.log("Seguiremos evaluando");
}
console.log("<---Declaración antes del if***");

//++++++++++++++Declaración de bloque+++++++++++++++++++++
console.log(`La edad es ${edad>24 ? "mayor":"menor"} a 25`);
console.log(`La edad es ${edad===25? "es igual": edad>24? "mayor":"menor"} a 25`)