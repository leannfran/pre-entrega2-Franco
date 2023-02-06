import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Itemdetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const {id} = useParams()
  useEffect(()=> {
    fetch('../json/productos.json')
    .then (response => response.json())
    .then (products => {
     const item = products.find(prod => prod.id === parseInt(id))
      setProducto(item)
    })
      
    }, [])
  
    return (
        <div className=' mx-10 my-10 flex items-center justify-between flex-wrap gap-8'>
          <Itemdetail item={producto} />
        </div>
    );
}

export default ItemDetailContainer;
