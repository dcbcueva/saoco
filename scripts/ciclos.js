console.log("Sesión JS04 Ciclos")

/**
 * La razón del pr qué se recomienda declarar una
 * arreglo u objeto con const, es para evitar 
 * que se cambie el *tipo* de dato:
 */
let arrayLet = [1,2,3,4];
const myArray = [10,11,12];

myArray.push("Holi Crayoli 2");
myArray[myArray.length]="Holi Crayoli 3";
myArray[5]="xd";//indice 5
myArray[3]="Mel";//Remplazar Holi Crayoli 2

//se remplaza Holi Crayoli 3 sin importar en que lugar del arreglo se encuentre
for (let index=0; index<myArray.length; index++){
    if (myArray[index] === "Holi Crayoli 3") myArray[index]="Omar";
}
console.log(myArray);

//Rafa
function reemplazarR(myArray, stringToReplace, newString) {
    const index = myArray.indexOf(stringToReplace)
    if (index>-1)myArray[index] = newString
    return myArray;
}
console.log(reemplazarR(myArray, "xd", "Rafa"));

//Rafa 2.0
function reemplazarOInsertar(myA, stringToReplace, newString) {
    const a = myA.includes(stringToReplace) 
    ? myA[myA.indexOf(stringToReplace)] = newString 
    : myA;
    return myA;
}
console.log(reemplazarOInsertar(myArray, 11, "Rodrigo"));

//---------------------------------------------------------------------------
/**
 * FIFO:
 *       E3   E2  E1 --->  [ arreglo  ] --->  E3   E2  E1
 * LIFO: 
 *       E3   E2  E1 --->  [ arreglo  ] --->  E1   E2  E3
 */
 console.log("#####  FIFO LIFO ######")
 const perecederos = ["manzanas", "quesos","fresas"]; 
 //FIFO
 //Agregamos un elemento al final del arreglo:
 perecederos.push("leche");//4to elemento
 console.log(perecederos);
 //Sacamos el primer elemento del arreglo
 console.log("Elemento eliminado "+perecederos.shift());
 console.log(perecederos);
//LIFO
console.log("\n----- LIFO ----- ");
const tienda =[...perecederos]; // se clona el arreglo perecederos en tienda == perecederos.slice();
console.log(tienda);
 //Agregamos un elemento al final del arreglo:
 tienda.push("el amor");//4to elemento
 console.log(tienda);
 //sacamos el ultimo elemento en entrar
 tienda.pop();
 console.log(tienda);
 
 
 const numArray = [2,4,5,6]

 const duplicated = numArray.map(num => num * 2)
 
 console.log(duplicated)

 //--------------------------------------------------------
console.log("##### Calccular el factorial de un número ######");
function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}
console.log(factorialRecursivo(5));
//--------------------------------------------------------
console.log('##### De la palabra "Pepe Pecas Pica Papas" saber cuantas "e" tiene ######');
console.log(Array.from(`pepe pecas pica papas`).map(element=> (element == "e") *1 ).reduce((a,b)=>a+b));
const phrase = "Pepe Pecas Pica Papas"

const getHowManyCharacters = (str, ch) => str.split("").filter(e => e === ch).length


console.log(getHowManyCharacters(phrase, "e"))
