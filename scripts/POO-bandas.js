import{Banda} from './bandas.js'
import{BandaEmo} from './bandas-emo.js'

console.log("JS08 Un día triste como todos");

const elRecodo=new Banda("El recodo",50,"México");
console.log(elRecodo.imprimir());

const mS=new Banda("MS",200,"México");
console.log(mS.imprimir());

const pXNDX=new Banda("PXNDX",4,"México");
console.log(pXNDX.imprimir());
// Verificar la fecha de creación
console.log(`Fecha de creación de ${elRecodo.nombre} fue el ${elRecodo.creacion}`);
console.log(`Fecha de creación de ${pXNDX.nombre} fue el ${pXNDX.creacion}`);

elRecodo.nParticipantes += 1;
console.log(elRecodo.imprimir());

const paramore = new BandaEmo("Paramore",3,"USA",3.5);
console.log(paramore.imprimir()); 

//Usando polimorfismo -->
muestraDatos(elRecodo);
muestraDatos(paramore);


function muestraDatos(objBanda){
    console.log("===Atención, Toquín de ===");
    console.log(objBanda.imprimir());
    console.log("===  No te lo pierdas  ===");
}