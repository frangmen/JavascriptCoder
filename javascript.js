 let nombre = prompt("Ingrese su primer nombre");
let apellido = prompt("Ingrese su Apellido");
let edad = parseInt(prompt("Ingrese su Edad")); 
 const suma = edad + 30; 
let Dia = "27";
let Mes = "02";
let Anio = "1989";
const Cumpleanos = Dia + "/" + Mes + "/" + Anio; 
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

alert("Gracias por visitarnos " + nombre + " " + apellido);

function saludar(nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido + " que bueno que nos visitas");
}
saludar(nombre, apellido);

if (edad < 50)
console.log("En el 2050 tendras " + suma + " " + "anios de vida");
else  
console.log("En el 2050 estaras mas cerca del arpa que de la guitarra");
/* 
console.log(Cumpleanos);

let result = confirm("Estas seguro que quieres ingresar?");
console.log(result);
 */

for (let i=0; i < dias.length; i++) {
  if (i == 6)
  alert("Hola " + nombre + " " + apellido + " el domingo es el dia de descanso")

  if (i % 2 !== 0)
  console.log('Los dias '+dias[i]+' son pares')
}