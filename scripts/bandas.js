
class Banda {
    #creacion;
    #nombre;
    #pais;
    #nParticipantes
    constructor(nombre, nParticipantes, pais) {
        this.#nombre = nombre;
        this.#pais = pais;
        this.#nParticipantes = nParticipantes;
        this.#creacion = new Date();
    }
    /**
     * Texto con los daos principales de la banda.
     * @returns mensaje con datos principales.
     */
    imprimir() {
        return `Grupo ${this.#nombre} de ${this.#nParticipantes} integrantes, del país ${this.#pais}`
    }
    get creacion() {
        return this.#creacion;
    }
    get nParticipantes(){
        return this.#nParticipantes;
    }
    set nParticipantes(nuevoNumero){
        this.#nParticipantes = nuevoNumero;
    }
}

export {Banda};