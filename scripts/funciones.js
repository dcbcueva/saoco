console.log("Sesion S02 JavaScript")

//++++++++++++++Función Declarada   +++++++++++++++++++++
/**
 *  Este es un ejempo de una función declarada
 */

/**
 * Realiza la suma de 2 numeros
 * @param {Number} a multiplicando
 * @param {Number} b multiplicador
 * @returns resultado de la multiplicacion de a*b
 */
function multiplica(a,b){
    return (a*b);
}
console.log("Multiplica5*6 = " +multiplica(5,6) )


//++++++++++++++Funcióm Expresada+++++++++++++++++++++
/*
*
*Las funciones expresadas (function expressions)
*son declaradas dentro de la asignacion de una variable.
*
*Estas funciones pueden ser anónimas (no tener nombre).
*Las funciones expresadas no tienen hoisting.
*/
/**
 * Sumatoria de 2 numeros
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado de a +b
 */
const suma= function(a,b){ return a+b;}

console.log("El resultado de 56 + 4 = "+ suma(56,4));

//++++++++++++++Función Auto invocada+++++++++++++++++++++
/**
 * Las funciónes autoinvocadas (self invoking functions)
 * Pueden ser anonimas y se autoejecutan() en su declaración(function)().
 */
(function bienvenida(){
    console.log("=============");
    console.log("Hola crayoli");
    console.log("=============");
})();

//++++++++++++++Función flecha+++++++++++++++++++++
/**
 * Las funciónes flecha (arrow function) funciones similar a las 
 * funciones declaradas, pero no requieren la
 * palabra "function" y si tienen una sola instruccion
 * y es el retorno, no requiere la instruccion "return".
 */

/**
 * Realiza una resta de 2 números
 * @param {Number} a 
 * @param {Number} b 
 * @returns la resta de a-b
 */
const resta = (a,b)=>a-b;

console.log("La resta de 10-5 = "+resta(10,5));

//++++++++++++++Parámetros default +++++++++++++++++++++
/**
 * Función con parametos inicializados
 */

function divide(a,b=0){
    return a/b;
}

console.log("La divicion de a/b = " +divide(4));

//++++++++++++++Función recursivas+++++++++++++++++++++

function factorial(num){
    if(num<=0) return 1;
    return (num* factorial(num-1));
}
console.log("Factorial de 5 = "+ factorial(4))

//++++++++++++++Rest Parameters+++++++++++++++++++++
// (parameters) => operation;
// (param1, param2) => { return data };
function sum(a,b, ...resto){
    let suma=a+b;
    resto.forEach(element => {
        //suma=suma+element;
        suma+=element;
    });
    return suma;
}
console.log("El resultado de sumar varios números es: "+sum(2,3,5,7,3));
