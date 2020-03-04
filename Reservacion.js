import Huesped from ".Huesped.js";
class Reservacion{
    constructor(numeroHabitacion, fecha , noches){
        this.numeroHabitacion = numeroHabitacion;
        this.fecha = fecha;
        /*this.fechaLlegada = new Date(año, mes -1, dia);
        this.fecha = new Date(año, mes -1, dia);*/
        this.noches = noches;
        this.huespedes = new Array();
    }
/*
fechaLlegada(){
    return(`${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`);
}
*/

getFechaFormatoCorto(){
    return(this.fecha.getFecha());
}
addHuesped(){
this.huesped.push(Huesped);
}

getNumHuespedes(){
    return (`${this.huespedes(huespedes.length)}`)
    /*console.log(huespedes.length)*/

}

print(){
}


}

var reservacion1 = new Reservacion(255,new fecha(2,4,2020),5);
/*
console.log(reservacion0.getFechaFormatoCorto());*/

class Fecha{
    constructor (dia, mes, año){
            this.fecha = new Date(año, mes -1, dia);
            }
        
        getFecha(){
                return(`${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`);
        }   
    
    }

var fecha1= new Fecha(26,2,2021);
console.log(reservacion1.fechaLlegada());