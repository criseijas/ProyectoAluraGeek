import { productoServices } from "../service/producto-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const imagen = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-desc]").value;

    productoServices.crearProducto(imagen, nombre, precio, descripcion).then(respuesta => {
        alert("Producto agregado");
        /*window.location.href = "/screens/agregado.html";*/
    }).catch(err => console.log(err));
});