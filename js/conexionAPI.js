async function listaProductos() {
  const conexion = await fetch("http://localhost:3001/productos", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

async function enviarProducto(nombre, precio, url) {
  const conexion = await fetch("http://localhost:3001/productos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: nombre,
      url: url,
      precio: precio,
    }),
  });
  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

async function buscarProductos(palabraClave) {
  const conexion = await fetch(
    `http://localhost:3001/productos?q=${palabraClave}`
  );
  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

export const conexionAPI = {
  listaProductos,
  enviarProducto,
  buscarProductos,
};
