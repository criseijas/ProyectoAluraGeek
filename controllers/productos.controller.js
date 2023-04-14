import { productoServices } from "../service/producto-service.js";

const crearNuevaLinea = (imagen, nombre, precio, id) => {
    const linea = document.createElement("div");
    const contenido = `<div class="prod">
    <img class="prod__imagen" alt="Joystick PS5" src="${imagen}"/>
    <div class="prod__contenido">
        <h4 class="prod__titulo">${nombre}</h4>
        <p class="prod__precio">$ ${precio}</p>
        <a class="prod__boton" href="productos_descripcion.html?id=${id}">Ver producto</a>
    </div>
</div>`;

    linea.innerHTML = contenido;
    return linea;
}

const contenedor = document.querySelector("[data-producto]");


productoServices.listaProductos().then( data =>{

    data.forEach( producto => {
    const nuevaLinea = crearNuevaLinea(producto.imagen, producto.nombre, producto.precio, producto.id);
    contenedor.appendChild(nuevaLinea);
});
   
}).catch( err => alert("Hubo un error"));