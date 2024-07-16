import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const url = document.querySelector("[data-url]").value;
  let precio = document.querySelector("[data-precio]").value;
  precio = precio.replace(/\D/g, "");
  precio = precio.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  try {
    await conexionAPI.enviarProducto(nombre, precio, url);
    window.location.href = "/pages/envio-concluido.html";
  } catch (e) {
    alert(e);
  }
}
formulario.addEventListener("submit", (evento) => crearProducto(evento));
