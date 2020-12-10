  let nombre = prompt("Ingrese su primer nombre");
let apellido = prompt("Ingrese su Apellido");
let edad = parseInt(prompt("Ingrese su Edad"));  
  const suma = edad + 30;  
let Dia = "27";
let Mes = "02";
let Anio = "1989";
const Cumpleanos = Dia + "/" + Mes + "/" + Anio; 
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

/* alert("Gracias por visitarnos " + nombre + " " + apellido); */
/* 
function saludar(nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido + " que bueno que nos visitas");
}
saludar(nombre, apellido); */
/* 
if (edad < 50)
console.log("En el 2050 tendras " + suma + " " + "anios de vida");
else  
console.log("En el 2050 estaras mas cerca del arpa que de la guitarra"); */
/* 
console.log(Cumpleanos);

let result = confirm("Estas seguro que quieres ingresar?");
console.log(result);
 */

for (let i=0; i < dias.length; i++) {
  if (i == 6)
  alert("Hola " + nombre + " " + apellido + " el domingo es el dia de descanso")

  else if(i % 2 !== 0)
  console.log('Los dias '+dias[i]+' son pares')
}

let x = Number(prompt("Cuantas horas trabajas por dia?"))
let y = Number(prompt("Cuantos dias trabajas por semana?"))
let multiplicar = x * y;
let promedio = multiplicar /7 ;


function sumar (x, y) {
  console.log(`La cantidad de horas semanales que trabajas es ${x * y}`)
  return multiplicar;
}

sumar (x ,y)

function promediar () {
  console.log(`${promedio} horas trabajas promedio por dia`)
  return promedio
}

promediar ()

if (promedio >= 10)
alert("Hola, estas trabajando demasiado, te recomiendo que descanses")

else if(promedio < 10)
alert("Estas trabajando poco, puedes trabajar un poco mas")
