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

export const productoServices = {
    listaProductos,
    crearProducto,
}
