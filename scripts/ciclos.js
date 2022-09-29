console.log("Sesión JS04 Ciclos")

/**
 * La razón del pr qué se recomienda declarar una
 * arreglo u objeto con const, es para evitar 
 * que se cambie el *tipo* de dato:
 */
/* let arrayLet = [1,2,3,4];
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
console.log(reemplazarOInsertar(myArray, 11, "Rodrigo")); */

//---------------------------------------------------------------------------
/**
 * FIFO:
 *       E3   E2  E1 --->  [ arreglo  ] --->  E3   E2  E1
 * LIFO: 
 *       E3   E2  E1 --->  [ arreglo  ] --->  E1   E2  E3
 */
/*  console.log("#####  FIFO LIFO ######")
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

console.log("para imprimir el que tiene mas");
const phrase2 = "Pepe Pecas Pica Papas"
Array.from(`pepe pecas pica papas`).map(element=> (element == "e") *1 ).reduce((a,b)=>a+b);

console.log("\n ### Cliclo For ###"); */
/**
 * sintaxis ciclo for
 * for (inicio;condicion;expresionfinal){
 *  instrucciones;
 * }
 */

//for(let i=0;i<=10;i++)
    //console.log("El valor de la iteracion es: " +i);
    //console.log("El valor de la iteracion +1 = " (i+1));


//console.log("\n ### For con continue y break ### ");
/**
 * la instruccion break, rompe el ciclo no importa el n. de iteracion donde se encuentre
 * la instruccion continue, interrumpe la iteracion encurso y continua a la sig. iteracion
 */
 //let ch18 = ["Abelardo", "Audery", "Angel", "Sharon", "Bren", "Pato Lucas", "Victor"];
/* for (let i = 0; i < ch18.length; i++) {
    if(ch18[i]==='Pato Lucas'){
        console.warn("Atencion, esta persona no pertenece a la CH18" +ch18[i]);
        break;
    }
    console.log("Persona de Ch18: "+ch18[i]);
} */
/* for (let i = 0; i < ch18.length; i++) {
    if(ch18[i] !== "Pato Lucas") continue;
    console.warn("Atencion, esta persona no pertenece a la CH18" +ch18[i]);
}

console.log("\n ### Matrices ### ");

const generation=[
    ["Abelardo", "Audery", "Angel", "Sharon", "Bren", "El bromas", "Victor"],
    ["Yosceline", "Mariana", "Karen", "Pedro"],
    ["Emiliano", "Jonathan", "Esteban", "El bromas"]
]; */
//for par aimprimir todos los nombres de mi arreglo de arreglos
/* for(let i=0; i<generation.length;i++){
    console.log(`Los integrantes de la corte ${i+1} son: `)
    for(let j=0; j<generation[i].length;j++){
        console.log(generation[i][j]);
    }
}
 */
//for para imprimir el bromas y su lugar en el arreglo de arreglos
/* continua_buscando:
for(let i=0; i<generation.length;i++){
    for(let j=0; j<generation[i].length;j++){
        if (generation[i][j]==="El bromas"){ 
            console.warn(`El bromas esta en la corte ${i+1} en la poscicion ${j+1}`);
            //continue continua_buscando;
            //break continua_buscando;
        }
        //console.log(`Numero de iteracion ${i}-${j}`);
    }
} */

//--------------------------------------------------------
//------------------------Ciclo While--------------------------------
/**
 * Sintaxis:
 *  while(condicion){
 *  instrucion;}
 */
/* console.log("\n ### ciclo while### ");
let findNumber=true;
let number=1;
while(findNumber){
    if (confirm(`¿El número es ${number}?`)) {
        findNumber=false;
        alert(`Felicidades tu número es ${number}`)
    }
    else if (number>10) {
        findNumber=false;
        alert(`No sabes jugar`)
    }
    number++;
} */
/* let bandera = false;
while(bandera){
    console.log("Mensaje dentro del cilo while");
}
do{
    console.log("mensaje dentro del do while")
}while(bandera); */
let contador =0;
do{
    console.log("Mensaje dentro del cilo while");
}while(++contador<10)
contador =3;
while(contador++<10){
    console.log("Mensaje dentro del cilo while "+contador);
}