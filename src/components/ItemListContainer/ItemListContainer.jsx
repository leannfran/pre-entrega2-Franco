import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import CarrouselProd from "./CarrouselProd";
//firebase
import { getProductos } from "../../firebase/firebase";
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      getProductos()
        .then(items => {
          const products = items.filter(prod => prod.idCategoria === idCategoria  );
          const productsList = (<ItemList products={products} plantilla={"item"} />); 
    //Array de productos en JSX
          setProductos(productsList);
        })
    } else {
        getProductos()
        .then(products => {
          const productsList = <ItemList products={products} plantilla={'item'}/> 
          setProductos(productsList);
        });
    }
  }, [idCategoria]);

 

  return (
    <>
    <CarrouselProd/>
    <div className=" mx-10 my-10 flex items-center justify-between flex-wrap gap-8">
      {productos}
    </div>
    </>
  );
};

export default ItemListContainer;
