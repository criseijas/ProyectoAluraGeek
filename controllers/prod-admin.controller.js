import { productoServices } from "../service/producto-service.js";

const crearNuevaLinea = (imagen, nombre, precio, id) => {
    
    const linea = document.createElement("div");
    const contenido = `<div class="prod">
    <a class="prod__editar" href="#" id="${id}"><img src="../assets/img/Edit_icon-icons.com_55921.png" alt="edit"></a>
    <a class="prod__eliminar" href="#" id="${id}"><img src="../assets/img/3643729-bin-delete-garbage-rubbish-trash-waste_113421.png" alt="delete"></a>
    <img class="prod__imagen" alt="Joystick PS5" src="${imagen}"/>
    <div class="prod__contenido">
        <h4 class="prod__titulo">${nombre}</h4>
        <p class="prod__precio">$ ${precio}</p>
    </div>
</div>`;

    linea.innerHTML = contenido;
    const btn = linea.querySelector(".prod__eliminar");
    btn.addEventListener("click", () => {
        const id = btn.id;

        productoServices.eliminarProducto(id).then(respuesta => {
            console.log(respuesta);
        }).catch(err => alert("Ocurrió un error"));
    });
    return linea;
}

const contenedor = document.querySelector("[data-admin]");


productoServices.listaProductos().then( data =>{

    data.forEach(({imagen, nombre, precio, id}) => {
    const nuevaLinea = crearNuevaLinea(imagen, nombre, precio, id);
    contenedor.appendChild(nuevaLinea);
});
   
}).catch( err => alert("Hubo un error"));

