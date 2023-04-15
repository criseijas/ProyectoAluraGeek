import { productoServices } from "../service/producto-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        /*window.location.href = "../screens/...."*/
        alert("id nulo");
    }

   const imageUrl = document.querySelector("[data-url]");
   const nombre = document.querySelector("[data-nombre]");
   const precio = document.querySelector("[data-precio]");
   const descripcion = document.querySelector("[data-desc]");

   productoServices.detalleProducto(id).then((producto) => {
        imageUrl.value = producto.imagen;
        nombre.value = producto.nombre;
        precio.value = producto.precio;
        descripcion.value = producto.descripcion;
   });
};

obtenerInfo();

formulario.addEventListener("submit", (evento) => {

   evento.preventDefault();
   const url = new URL(window.location);
   const id = url.searchParams.get("id");

   const imagen = document.querySelector("[data-url]").value;
   const nombre = document.querySelector("[data-nombre]").value;
   const precio = document.querySelector("[data-precio]").value;
   const descripcion = document.querySelector("[data-desc]").value;

   productoServices.editarProducto(imagen, nombre, precio, descripcion, id); 
   

})