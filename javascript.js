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
const formulario = document.querySelector("#formulario");

let articulosCarrito = [];
let stockProductos;

/* Listeners */
listaProductos.addEventListener("click", agregarProducto);
//carrito.addEventListener("click", quitarProducto);
$("#carrito").on("click", quitarProducto);

btnVaciarCarrito.addEventListener("click", vaciarCarrito);
//$('#btnVaciarCarrito').on('click', vaciarCarrito);

$("#formulario").on("submit", filtrarProductos);
//formulario.addEventListener('submit', filtrarProductos);

window.onload = () => {
  $("#random-product").click(() => {
    $.ajax({
      url: "productos.json",
      dataType: "json",
      contentType: "application/json",
      success: crearTarjeta,
    });
  });
};

function crearTarjeta(result) {
  const { image, name, prize, id } = result;
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
				${id}
			</td>
			<td>
				<a href="#" class="borrar-producto" data-id="${id}"> X </a>
			</td>
		`;

  contenedorCarrito.appendChild(row);
}

$(function () {
  document.addEventListener("DOMContentLoaded", () => {});

  $("<h1>THIS MONTH´S TRENDS</h1>")
    .css({ "text-align": "center", "background-color": "pink" })
    .insertBefore($("#lista-productos"));
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("antes de ajax");
  $.ajax({
    url: "productos.json",
    success: function (data, status, xhr) {
      stockProductos = data;
      cargarListaProductos(data);
      console.log(status);
      console.log(data);
    },
    error: function (xhr, status, errorThrown) {
      console.log(xhr);
      console.log(status);
      console.log(errorThrown);
    },
  });
  console.log("despues de ajax");

  articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

  insertarCarritoHTML();
  /* $(".submenu").on({
		'mouseover': function () {
			$(".submenu #carrito").slideDown('slow');
		},
		'mouseleave': function () {
			$(".submenu #carrito").slideUp('slow');
		} */
});

// FUNCIONES

function filtrarProductos(e) {
  e.preventDefault();

  //const busqueda = document.querySelector('#buscador').value;
  const busqueda = $("#buscador").val();
  const resultado = stockProductos.filter((producto) =>
    producto.name.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())
  );

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

    const divCard = document.createElement("div");
    divCard.classList.add("col-md-4");
    divCard.innerHTML = `
			<div class="card" style="width: 18rem">
				<img src="${image}" class="card-img-top">
				<div class="card-body">
					<p class="card-text">${name}</p>
          <p class="card-text">Available Now!</p>
					<a href="#" id="myBtn" class="btn btn-primary" data-id=${id}>${prize}</a>
  
				</div>
			</div>
		`;

    if (index % 3 === 0) {
      const row = document.createElement("div");
      row.classList.add("row");

      listaProductos.appendChild(row);
      row.appendChild(divCard);
    } else {
      const cantRows = document.querySelector("#lista-productos").children
        .length;
      const rows = document.querySelectorAll("#lista-productos .row");
      const row = rows[cantRows - 1];
      row.appendChild(divCard);
    }
  });
}

function quitarProducto(e) {
  if (e.target.classList.contains("borrar-producto")) {
    const productoId = e.target.getAttribute("data-id");

    articulosCarrito = articulosCarrito.filter(
      (producto) => producto.id != productoId
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
