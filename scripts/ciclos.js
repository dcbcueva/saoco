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
