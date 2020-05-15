import React, {Fragment, useState} from 'react';
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Producto from "./components/Producto"; 
import Carrito from "./components/Carrito"; 
function App() {

  //Carrito
  const [carrito,setCarrito] = useState([]);
  //Listado de productor
  const [productos , setProducto ] = useState([
    {id: 1, nombre: 'Camisa Vuejs', precio:50},
    {id: 2, nombre: 'Camisa React Js', precio:40},
    {id: 3, nombre: 'Camisa Nuxt', precio:30},
    {id: 4, nombre: 'Camisa Angular', precio:20},
  ]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header
        titulo = 'Tienda virtual'
      />
      <h1>Lista de productos</h1>
      {productos.map(producto=>
        <Producto 
          key = {producto.id}
          producto = {producto}
          carrito = {carrito}
          productos={productos}
          setCarrito ={setCarrito}
        />
      )}
      <Carrito
        carrito = {carrito}
        setCarrito = {setCarrito}
      />
      <Footer
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;
