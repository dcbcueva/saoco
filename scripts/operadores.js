console.log("Sesion JS05 Operadores");
// Operadores de asignación
let numero =10;
numero+=10;
numero-=5;

numero=12;
console.log("valor de número= "+(numero+=3));
numero*=2;//30
numero/=3;//10
numero%=2;//0
numero**=3;//0
console.log("valor de número= "+numero++);//0
console.log("valor de número= "+ ++numero);//2

// Operadores lógicos &&, ||, !
let valorB = true && true;
valorB= true && true || !false && true && "hola";
console.log("Valor Booleano "+ valorB)