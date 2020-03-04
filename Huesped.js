class Huesped{

    constructor(nombre){
        this.nombre = nombre;
        this.genero = ["Masculino","Femenino"];
    }


    getDescripcion(){
        return (`${this.nombre}(${this.genero[0]})`);

    }
}


var huesped0 = new Huesped("Barniel Dinos Aurio");

console.log(huesped0.getDescripcion());