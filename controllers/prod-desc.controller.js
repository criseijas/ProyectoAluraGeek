import {productoServices} from "../service/producto-service.js";

const obtenerInfo = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    
    const crearNuevaLinea = (nombre, imagen, descripcion) => {

        const linea = document.createElement("div");
        const contenido = `<div class="prod">
        <img class="prod__imagen" alt="Joystick PS5" src="${imagen}"/>
        <div class="prod__contenido">
            <h2 class="prod__titulo">${nombre}</h2>
            <p class="prod__descripcion">${descripcion}</p>
        </div>
    </div>`;
    
        linea.innerHTML = contenido;
        return linea;
    }
    
    const contenido = document.querySelector("[data-desc]");

    
    productoServices.detalleProducto(id).then(producto => {
        const nuevaLinea = crearNuevaLinea(producto.nombre, producto.imagen, producto.descripcion);
        contenido.appendChild(nuevaLinea);
        
    });
}

obtenerInfo();