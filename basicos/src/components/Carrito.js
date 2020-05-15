import React from 'react'
import './css/carrito.css'
import Producto from "./Producto"; 
const Carrito = ({carrito,setCarrito}) =>{
    return(
        <div className='carrito'>
            <h2>Carrito de compras</h2>
            {carrito.length === 0
            ?<p>No hay productos</p>
            : carrito.map(producto => (
                <Producto
                    key = {producto.id}
                    producto = {producto}
                    carrito = {carrito}
                    setCarrito = {setCarrito}
                />
            ))}
        </div>
    );
}


export default Carrito;