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

//++++++++++++++If+++++++++++++++++++++
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
console.log(`La edad es ${edad===25? "es igual": edad>24? "mayor":"menor"} a 25`);

//++++++++++++++Operador ternario+++++++++++++++++++++

//++++++++++++++If, else if, else+++++++++++++++++++++
/**
 *      Sintaxis:
 *          if(condicionVerdadera) instrucion;
 *          
 *          if(condicionVerdadera){
 *              instrucciones;
 *          }
 *          else if{
 *              instrucciones;
 *          }
 *          else{
 *              instrucciones;
 *          }
 */
 console.log("===== Uso de if, else if, else=======");
 edad = 30;
 if (edad > 25) {
   console.log("La edad es mayor a 25");
 } else if (edad === 25) {
   console.log("La edad es 25");
 } else console.log("La edad es menor a 25");
 
 
 if (edad === 25) comparacion = "igual";
 else if (edad > 24) comparacion = "mayor";
 else comparacion = "menor";
 
 console.log (`(claru) La edad es ${ comparacion } a 25`) ;;

//++++++++++++++Ternario anidado+++++++++++++++++++++


//++++++++++++++Condicional Switch+++++++++++++++++++++
/**
 *      Sintaxis:
 *      switch(condicion){
 *          case1:
 *              instruccion;
 *              break;
 *          case12
 *              instruccion;
 *              break;
 *          case15:
 *              instruccion;
 *              break;
 *          default:
 *              instruccion;
 *              break;
 *      }
 */

edad=25;
comparacion="";
switch(edad){
    case 25:
        comparacion = "es igual";
    break;
    case 24:
        comparacion = "es menor";
    break;
    case 26:
        comparacion = "es mayor";
    break;
    default:
        comparacion ="No se puede saber";
    break;
}
console.log(`(switch)La edad es${comparacion} a 25`)

let numeroMes = 12;
let estacion = "", mes = "";

switch (numeroMes){
    case 12: case 1: case 2:
        estacion="Invierno";
    break;
    case 3: case 4: case 5:
        estacion="Primavera"
    break;
    case 6: case 7: case 8:
        estacion="Verano";
    break;
    case 9: case 10: case 11:
        estacion="Otoño";
    break;
    }
switch (numeroMes) {
    case 12:
        mes = "Diciembre";
    break;
    case 1:
        mes = "Enero";
    break;
    case 2:
        mes = "Febrero";
    break;
    case 3:
        mes = "Marzo";
    break;
    case 4:
        mes = "Abril";
    break;
    case 5:
        mes = "Mayo";
    break;
    case 6:
        mes = "Junio";
    break;
    case 7:
        mes = "Julio";
    break;
    case 8:
        mes = "Agosto";
    break;
    case 9:
        mes = "Septiembre";
    break;
    case 10:
        mes = "Octubre";
    break;
    case 11:
        mes = "Noviembre";
    break;
}

console.log("El mes de " + mes + " se encuentra en la estación " + estacion);

numeroMes = 5;

switch (numeroMes) {
    case 12: case 1: case 2:
      estacion = "Invierno";
      switch (numeroMes) {
        case 12:
          mes = "Diciembre";
          break;
        case 1:
          mes = "Enero";
          break;
        case 2:
          mes = "Febrero";
          break;
      }
      break;
    case 3: case 4: case 5:
      estacion = "Primavera";
      switch (numeroMes) {
        case 3:
          mes = "Marzo";
          break;
        case 4:
          mes = "Abril";
          break;
        case 5:
          mes = "Mayo";
          break;
      }
      break;
    case 6: case 7: case 8:
      estacion = "Verano";
      switch (numeroMes) {
        case 6:
          mes = "Junio";
          break;
        case 7:
          mes = "Julio";
          break;
        case 8:
          mes = "Agosto";
          break;
      }
      break;
    case 9: case 10: case 11:
      estacion = "Otoño";
      switch (numeroMes) {
        case 9:
          mes = "Septiembre";
          break;
        case 10:
          mes = "Octubre";
          break;
        case 11:
          mes = "Noviembre";
          break;
      }
      break;
    default:
      estacion = "No se encontro";
      mes = "No se encontro";
  }

  console.log("El mes de " + mes + " se encuentra en la estación " + estacion);
numeroMes=3;
  if(numeroMes==12 || numeroMes==1 || numeroMes==2){
    estacion="Invierno";
    if(numeroMes==12) mes="Diciembre";
    else if (numeroMes==1) mes="Enero";
    else mes="Febrero"; 
  }
  else if(numeroMes>=3 && numeroMes<=5){
    estacion="Primavera";
    if(numeroMes==3) mes="Marzo";
    else if(numeroMes==4) mes="Abril";
    else mes="Mayo";
  }
  else if(numeroMes>=6 && numeroMes<=8){
    estacion="Verano";
    if(numeroMes==6) mes="Junio";
    else if(numeroMes==7) mes="Julio";
    else mes="Agosto";
  }
  else if(numeroMes>=9 && numeroMes<=11){
    estacion="Otoño"
    if(numeroMes==3) mes="Septiembre";
    else if(numeroMes==4) mes="Octubre";
    else mes="Noviembre";
  }
  console.log("El mes de " + mes + " se encuentra en la estación " + estacion);

let online = true;
let active = true;
if(online) {
  if (active) {
    console.log('James')
  }
}

online&&active&&console.log("James");