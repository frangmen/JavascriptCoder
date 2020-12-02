let nombre = prompt("Ingrese su primer nombre");
let apellido = prompt("Ingrese su Apellido");
let edad = parseInt(prompt("Ingrese su Edad"));
const suma = edad + 30;
let Dia = "27";
let Mes = "02";
let Anio = "1989";
const Cumpleanos = Dia + "/" + Mes + "/" + Anio;

alert("Gracias por visitarnos " + nombre + " " + apellido);

function saludar(nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido + " que bueno que nos visitas");
}
saludar(nombre, apellido);

console.log("En el 2050 tendras " + suma + " " + "anios de vida");

console.log(Cumpleanos);

let result = confirm("Estas seguro que quieres ingresar?");
console.log(result);

console.warn("Ya tenemos toda tu informacion");
console.error("Deberias salir ya de esta pagina");
console.warn("Ya tenemos toda tu informacion");
console.error("Deberias salir ya de esta pagina");
console.warn("Ya tenemos toda tu informacion");
console.error("Deberias salir ya de esta pagina");
console.warn("Ya tenemos toda tu informacion");
console.error("Deberias salir ya de esta pagina");
console.warn("Ya tenemos toda tu informacion");
console.error("Deberias salir ya de esta pagina");