/*GET*/
const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then(respuesta => respuesta.json());
}


/*POST*/ 

const crearProducto = (imagen, nombre, precio, descripcion) => {

    return fetch("http://localhost:3000/producto", {

        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({imagen, nombre, precio, descripcion, id: uuid.v4()})
    })
}

/*DELETE*/

const eliminarProducto = (id) => {
    
    return fetch(`http://localhost:3000/producto/${id}`, {

        method:"DELETE"
    })
}

/*PUT*/

const editarProducto = (imagen, nombre, precio, descripcion, id) => {

    return fetch(`http://localhost:3000/producto/${id}`, {

        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({imagen, nombre, precio, descripcion})
    })
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.log(error));
}

export const productoServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    editarProducto,
}
