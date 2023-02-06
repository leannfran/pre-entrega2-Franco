import { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {idCategoria}= useParams();


  useEffect(()=> {
    if (idCategoria) {
      fetch('../json/productos.json')
      .then(response => response.json())
      .then(items => {
          const products = items.filter(prod => prod.idCategoria === idCategoria)
          const productsList = ItemList({products}) //Array de productos en JSX
          console.log(productsList)
          setProductos(productsList)
    })   
  } else  {
    fetch('./json/productos.json')
    .then (response => response.json())
    .then (products => {
      console.log(products)
      const productsList = ItemList({products}) 
      console.log(productsList)
      setProductos(productsList)
    })
  }
    }, [idCategoria])
  
    return (
        <div className=' mx-10 my-10 flex items-center justify-between flex-wrap gap-8'>
          {productos}
        </div>
    );
}

export default ItemListContainer;
