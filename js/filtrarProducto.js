import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarProductos.js";

async function filtrarProducto(evento) {
  evento.preventDefault();

  const lista = document.querySelector("[data-lista]");
  const datosDeBusqueda = document.querySelector("[data-busqueda]").value;

  const busqueda = await conexionAPI.buscarProductos(datosDeBusqueda);

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  busqueda.forEach((producto) =>
    lista.appendChild(crearCard(producto.nombre, producto.precio, producto.url))
  );
}

const boton = document.querySelector("[data-boton-busqueda]");
boton.addEventListener("click", (evento) => filtrarProducto(evento));

const inputEle = document.getElementById("buscar");
inputEle.addEventListener("keyup", function (e) {
  var key = e.which || e.keyCode;
  if (key == 13) {
    filtrarProducto(e);
  }
});
