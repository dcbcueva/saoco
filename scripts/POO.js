console.log("Sesion JS08 POO");
const miArreglo = [5, 7, 3, 2];
const miArregloConstructor = new Array(5, 7, 3, 2);

console.log(miArreglo);
console.log(miArregloConstructor);

//Propiedades de mi arreglo
console.log(miArreglo.length);
console.log(miArregloConstructor.length);

//Método del arreglo
console.log(miArreglo.sort());
console.log(miArregloConstructor.sort());

//==============================================
let coraline = {
    nombre: "Coraline y la puerta secreta",
    duracion: 100,
    genero: ["Animación", "Misterio", "Fantasía"],
    clasificacion: "B15",
    actores: [
        {
            nombre: "Teri Hatcher",
            pais: "USA"
        },
        {
            nombre: "Jenifer Saunders",
            pais: "UK"
        },
        {
            nombre: "Dakota Fanning",
            pais: "USA"
        }
    ],
    directores: {
        nombre: "Henry Selik",
        pais: "USA"
    },
    /*     mostarActores: () => {
            coraline.actores.forEach(info => { console.log(`Actor: ${info.nombre} del pais: ${info.pais}`); });
        }  */
    mostarActores: function () {
        //La palabra reservada this hace referencia al objeto que lo invoque 
        this.actores.forEach((info) => {
            console.log(`Actor: ${info.nombre} del pais: ${info.pais}`);
        });
    },
    mostarDirectores: function () {
        console.log(`Director: ${this.directores.nombre} del pais: ${this.directores.pais}`);
    },
    mostarGeneros: function () {
        this.genero.forEach((info) => {
            console.log(`Genero: ${info}`);
        });
    },
    /**
     * Mostrar Todos los datos de la pelicula.  
     */
    mostarTodaInfo: function () {
        console.log("////////////////////////////")
        console.log(`Pelicula: ${this.nombre}`);
        console.log(`Director: ${this.directores.nombre} del pais: ${this.directores.pais}`);
        console.log(`Duracion: ${this.duracion}`);
        console.log(`Clasificacion: ${this.clasificacion}`);
        this.mostarGeneros();
        this.mostarActores();
    }
}

//Accediendo al nombre:
console.log("Pelicula: " + coraline.nombre);
console.log("Eres arreglo? " + Array.isArray(coraline.actores));
function iterar(pelicula) {
    pelicula.actores.forEach(info => {
        console.log(`Actor: ${info.nombre} del pais: ${info.pais}`);
    })
};
iterar(coraline);
//Mostrando al director:
console.log(`Director: ${coraline.directores.nombre} del pais: ${coraline.directores.pais}`);
//Cambiando la clasificacion:
coraline.clasificacion = "C";
console.log("Clasificacion: " + coraline.clasificacion);
//Agregando a Ian MCShane de UK y Daw French de UK:
coraline.actores.push({ nombre: "Ian MCShane", pais: "UK" });
coraline.actores.push({ nombre: "Daw French", pais: "UK" });
//iterar(coraline);
coraline.mostarActores();
coraline.mostarTodaInfo();


