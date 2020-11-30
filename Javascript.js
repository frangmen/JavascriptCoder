let nombre = prompt ("Ingrese su primer nombre");
let apellido = prompt ("Ingrese su Apellido");

alert ("Gracias por visitarnos " + nombre);


function saludar(nombre) {
    console.log("Hola " + nombre + apellido + " que bueno que nos visitas");
}

saludar(nombre + apellido);

let result = confirm ('Estas seguro que quieres ingresar?');
console.log(result);

var Dia = "27";
var Mes = "02";
var Cumpleanos = Dia + "/" + Mes;
console.log(Cumpleanos);