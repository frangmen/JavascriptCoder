/*   let nombre = prompt("Ingrese su primer nombre");
let apellido = prompt("Ingrese su Apellido");
let edad = parseInt(prompt("Ingrese su Edad"));  
  const suma = edad + 30;  
let Dia = "27";
let Mes = "02";
let Anio = "1989";
const Cumpleanos = Dia + "/" + Mes + "/" + Anio; 
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
 */
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

/* for (let i=0; i < dias.length; i++) {
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

 */
const carrito = [];

function producto(nombre, tamano, precio, cantidad) {
  this.nombre = nombre;
  this.tamano = tamano;
  this.precio = precio;
  this.cantidad = cantidad;
  this.mostrarInfo = function () {
    console.log(`Este producto es: ${this.nombre} y cuesta: ${this.precio}`)
  }
}

const producto1 = new producto("Pink Namaste", 2, 19.99, 1);
const producto2 = new producto("Musculosa Blanca", 3, 22.99, 1);
const producto3 = new producto("Remera Blanca", 2, 22.99, 1);
const producto4 = new producto("Buzo Yogi", 2, 42.99, 1);
const producto5 = new producto("Musculosa Shakespeare", 2, 23.99, 1);
const producto6 = new producto("Musculosa Namaste", 2, 21.99, 1);

const Productos = new Array (producto1, producto2, producto3, producto4, producto5, producto6)

carrito[0]= producto1;
carrito[1]= producto2;
console.log(carrito);

carrito.push(producto3);
carrito.push(producto4);
carrito.push(producto5);
carrito.push(producto6);

console.table(carrito)
/* console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(producto6); */

console.log(producto);
console.log(Array.isArray(Productos));
console.table(Productos);
console.log(Productos.length);
console.log(Productos[2]);


const nombreProducto = prompt("Ingrese el nombre del producto");
const talleArticulo = Number(prompt("Ingrese el talle eligido"));
const precioArticulo = Number(prompt("Ingrese el precio del producto"));
const cantidadArticulos = Number(prompt("Ingrese el numero de unidades que desearia comprar"));

// LOS PROMPT DE ARRIBA SON SOLO PARA EL EJERCICIO, PARA AGREGAR UN OBJETO AL ARRAY DESDE UN PROMPT

// 

const productoUsuario = new producto(nombreProducto, talleArticulo, precioArticulo, cantidadArticulos);
carrito.unshift(productoUsuario);
console.table(carrito);
console.log(Productos.length);
console.log(Productos[0]);

// FILTRANDO LOS RESULTADOS 

const resultadoFilter = carrito.filter(prop => prop.precio == 22.99);
console.log(resultadoFilter);

/* producto1.mostrarInfo();
producto2.mostrarInfo();
producto3.mostrarInfo();
producto4.mostrarInfo();
producto5.mostrarInfo();
producto6.mostrarInfo(); */


