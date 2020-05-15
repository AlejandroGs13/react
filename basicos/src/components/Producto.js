import React from 'react';

const Producto = ({producto,carrito,setCarrito,productos}) =>{
    const {id, precio,nombre} = producto;

    //Agregar producto
    const seleccionarProducto = (id) =>{
        const producto = productos.filter(producto => producto.id === id)[0];
        if(producto){
            setCarrito([
                ...carrito,producto
            ])
        }
    }

    const eliminarProducto = (id) =>{
        const producto = carrito.filter(producto => producto.id !== id);
        setCarrito([...producto])
    }
    return (
        <div>
            <h3>{nombre}</h3>
            <h4>{precio}</h4>
            {
                productos
                ? 
                    (<button 
                    type="button"
                    onClick={() =>seleccionarProducto(id)}
                    >Agregar producto </button>
                    )
                : (<button 
                    type="button"
                    onClick={() =>eliminarProducto(id)}
                    >Eliminar</button>
                    )
            }
        </div>
    );
}

export default Producto;