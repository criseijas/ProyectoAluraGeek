/*GET*/
const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

/*POST*/ 

const crearProducto = (imagen, nombre, precio) => {

    return fetch("http://localhost:3000/producto", {

        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({imagen, nombre, precio, id: uuid.v4()})
    })
}

/*DELETE*/

const eliminarProducto = (id) => {
    
    return fetch(`http://localhost:3000/producto/${id}`, {

        method:"DELETE"
    })
}

export const productoServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
}
