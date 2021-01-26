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
/* const carrito = [];

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
carrito.push(producto6); */

/* console.table(carrito) */
/* console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(producto6); */

/* console.log(producto);
console.log(Array.isArray(Productos));
console.table(Productos);
console.log(Productos.length);
console.log(Productos[2]);


const nombreProducto = prompt("Ingrese el nombre del producto");
const talleArticulo = Number(prompt("Ingrese el talle eligido"));
const precioArticulo = Number(prompt("Ingrese el precio del producto"));
const cantidadArticulos = Number(prompt("Ingrese el numero de unidades que desearia comprar")); */

// LOS PROMPT DE ARRIBA SON SOLO PARA EL EJERCICIO, PARA AGREGAR UN OBJETO AL ARRAY DESDE UN PROMPT

//
/* 
 const productoUsuario = new producto(nombreProducto, talleArticulo, precioArticulo, cantidadArticulos);
carrito.unshift(productoUsuario);
console.table(carrito);
console.log(Productos.length);
console.log(Productos[0]); */

// FILTRANDO LOS RESULTADOS
/* 
const resultadoFilter = carrito.filter(prop => prop.precio == 22.99);
console.log(resultadoFilter); */

/* producto1.mostrarInfo();
producto2.mostrarInfo();
producto3.mostrarInfo();
producto4.mostrarInfo();
producto5.mostrarInfo();
producto6.mostrarInfo(); */
/* 
let elemento = document.createElement('h2');
elemento.textContent = ' NEW ARRIVALS ';
elemento.className = 'pruebas';
const divContenido = document.getElementsByClassName('.subtitulo');
// let contenido = document.textContent( " NEW ARRIVALS ")
document.body.appendChild(elemento);
elemento.style.color= "green";
elemento.style.backgroundColor = "yellow";
elemento.style.textAlign = "center";
elemento.style.overflow = "hidden"; */

/* 
divContenido.textContent = "SOY SOLO UN DIVISOR DE PRUEBA";

console.log(divContenido);
console.log(elemento.textContent); */

// Agarrando Elementos por Clase

/* let p = document.getElementsByTagName('p');
console.log(p);

console.log(elemento) */

/* 
function buenaBusqueda() {
  alert("Estamos trabajando para que funcione la pagina, gracias por tu paciencia");
  console.log(event);
}

function capturarEnter(e) {
  if (event.which == 13 || event.keyCode == 13) { 
alert("Proximamente vas a poder buscar productos aqui por estilos");        
   }
}
*/
function bigImg(x) {
  x.style.height = "264px";
  x.style.width = "264px";
}

function normalImg(x) {
  x.style.height = "132px";
  x.style.width = "132px";
}

// EN BASE A LO VISTO EN EL WORKSHOP AGREGUÉ UN CARRITO
// QUE CONTIENE IMAGEN, NOMBRE, PRECIO Y CANTIDAD
// A SU VEZ AGREGUE UN BOTON PARA BORRAR LA LINEA
// Y FUNCIONALIDAD AL BOTON DE BORRAR EL CARRITO

/* Selectores */
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaProductos = document.querySelector("#lista-productos");
const btnVaciarCarrito = document.querySelector("#vaciar-carrito");
const formulario = document.querySelector('#formulario');

let articulosCarrito = [];
let stockProductos;

/* Listeners */
listaProductos.addEventListener("click", agregarProducto);
//carrito.addEventListener("click", quitarProducto);
$("#carrito").on("click", quitarProducto);

btnVaciarCarrito.addEventListener("click", vaciarCarrito);
//$('#btnVaciarCarrito').on('click', vaciarCarrito);

$('#formulario').on('submit', filtrarProductos);
//formulario.addEventListener('submit', filtrarProductos);
$('#compra-realizada').on("click", confirmarCompra);

function confirmarCompra(e) {
  e.preventDefault();

  if (e.target.classList.contains("button u-full-width")) {
    $.ajax({
      url: 'productos.json',
      success: function (data, status, xhr) {
        stockProductos = data;
        cargarListaProductos(data);
        console.log(status)
        console.log(xhr)
      },
      error: function (xhr, status, errorThrown) {
        console.log(xhr)
        console.log(status)
        console.log(errorThrown)
      } 
    })
}}
    



$(function () {
  document.addEventListener("DOMContentLoaded", () => {
    ;

  })

  $("<h1>THIS MONTH´S TRENDS</h1>").css({"text-align": "center","background-color":"pink"}).insertBefore($('#lista-productos'));

  });     

document.addEventListener("DOMContentLoaded", () => {

  console.log("antes de ajax")
  $.ajax({
		url: 'productos.json',
		success: function (data, status, xhr) {
      stockProductos = data;
			cargarListaProductos(data);
			console.log(status)
			console.log(data)
		},
		error: function (xhr, status, errorThrown) {
			console.log(xhr)
			console.log(status)
			console.log(errorThrown)
		} 
  });
  console.log("despues de ajax")

  articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

  insertarCarritoHTML();
  /* $(".submenu").on({
		'mouseover': function () {
			$(".submenu #carrito").slideDown('slow');
		},
		'mouseleave': function () {
			$(".submenu #carrito").slideUp('slow');
		} */
	})
;


// FUNCIONES


  
function filtrarProductos(e) {
	e.preventDefault();

	//const busqueda = document.querySelector('#buscador').value;
  const busqueda = $("#buscador").val();
	const resultado = stockProductos.filter(producto => producto.name.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()));

  limpiarProductos();
  cargarListaProductos(resultado);
}
function vaciarCarrito() {
  limpiarCarrito();
  articulosCarrito = [];
  guardarStorage();
  
}

  function cargarListaProductos(productos) {
	productos.forEach((producto, index) => {

		const { image, name, prize, id } = producto;

		const divCard = document.createElement('div');
		divCard.classList.add('col-md-4');
		divCard.innerHTML = `
			<div class="card" style="width: 18rem">
				<img src="${image}" class="card-img-top">
				<div class="card-body">
					<p class="card-text">${name}</p>
					<a href="#" class="btn btn-primary" data-id=${id}>${prize}</a>
				</div>
			</div>
		`

		if (index % 3 === 0) {
			const row = document.createElement('div');
			row.classList.add('row');

			listaProductos.appendChild(row);
			row.appendChild(divCard);
		} else {
			const cantRows = document.querySelector('#lista-productos').children.length
			const rows = document.querySelectorAll('#lista-productos .row');
			const row = rows[cantRows - 1];
			row.appendChild(divCard);
		}
	})

}


function quitarProducto(e) {
  if (e.target.classList.contains("borrar-producto")) {
    const productoId = e.target.getAttribute("data-id");

    articulosCarrito = articulosCarrito.filter(
    producto => producto.id != productoId
    );

    insertarCarritoHTML();

    guardarStorage();
  }
}

function agregarProducto(e) {
  e.preventDefault();

  if (e.target.classList.contains("btn-primary")) {
    const productoSeleccionado = e.target.parentElement.parentElement;

    obtenerDatos(productoSeleccionado);
  }
}

function obtenerDatos(producto) {
  /* Extraer informacion del producto */

  const productoAgregado = {
    image: producto.querySelector("img.card-img-top").src,
    name: producto.querySelector("p.card-text").textContent,
    prize: producto.querySelector("a.btn.btn-primary").textContent,
    id: producto.querySelector("a.btn.btn-primary").getAttribute("data-id"),
    quantity: 1,
  };
  const existe = articulosCarrito.some(
    (producto) => producto.id == productoAgregado.id
  );

  if (existe) {
    /* Producto ya existente */
    const productos = articulosCarrito.map((producto) => {
      if (producto.id === productoAgregado.id) {
        producto.quantity++;
        return producto;
      } else {
        return producto;
      }
    });
    articulosCarrito = [...productos];
  } else {
    /* Agrego el producto al carrito */
    articulosCarrito.push(productoAgregado);
  }

  insertarCarritoHTML();
  guardarStorage();
}

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}

function insertarCarritoHTML() {
  limpiarCarrito();

  articulosCarrito.forEach((producto) => {
    const { image, name, prize, quantity, id } = producto;

    const row = document.createElement("tr");
    row.innerHTML = `
			<td>
				<img src="${image}" width=100>
			</td>
			<td>
				${name}
			</td>
			<td>
				${prize}
			</td>
			<td>
				${quantity}
			</td>
			<td>
				<a href="#" class="borrar-producto" data-id="${id}"> X </a>
			</td>
		`;

    contenedorCarrito.appendChild(row);
  });
}

function limpiarCarrito() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

function limpiarProductos() {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }
}
