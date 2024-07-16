import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(nombre, precio, url) {
  const producto = document.createElement("li");
  producto.className = "productos__item";
  producto.innerHTML = `<img
            src="${url}"
            alt="producto lego"
            width="250"
            height="250"
          />
          <div class="descripcion-producto">
            <h3>${nombre}</h3>
            <div class="precio__producto">
              <p>$ ${precio}</p>
              <img src="./img/basura.png" alt="canasta venta" class="eliminar__imagen"/>
            </div>
          </div>  `;

  producto.querySelector(".eliminar__imagen").addEventListener("click", () => {
    eliminarCard(producto);
  });

  return producto;
}

function eliminarCard(card) {
  lista.removeChild(card);
}

async function listaProductos() {
  try {
    const listaAPI = await conexionAPI.listaProductos();
    listaAPI.forEach((producto) =>
      lista.appendChild(
        crearCard(producto.nombre, producto.precio, producto.url)
      )
    );
  } catch {
    lista.innerHTML = `<h2 class="main__content">Ha ocurrido un problema con la conexion</h2>`;
  }
}

listaProductos();
