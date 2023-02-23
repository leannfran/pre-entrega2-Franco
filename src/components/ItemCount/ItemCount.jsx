import React from "react";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

import {toast} from 'react-toastify'
import { useState } from "react";

const ItemCount = ({ valInicial, stock, onAdd }) => {
  const [contador, setContador] = useState(valInicial);
    
  //sumar,restar,agregar,toasty
  const sumar = () => contador < stock && setContador(contador + 1); //contador = contador + 1
  const restar = () => contador > valInicial && setContador(contador - 1); //Operador ternario sin else
  const agregarCarrito = () => {
    onAdd(contador);
    toast.success('Producto Agregado !', {
        position: "top-right",
        autoClose: 4560,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  };
  return (
    <>
      <div className="flex items-center">
        <button
          className="flex items-center min-h-[2.5rem] w-full  md:w-auto font-bold   text-gray-800 py-2 px-4 hover:bg-gray-200 hover:text-white rounded-full transition-colors my-10"
          aria-label="sumar"
          onClick={() => sumar()}
        >
          <GrAdd className="text-xs" />
        </button>

        <p className="font-light text-2xl px-3"> {contador}</p>

        <button
          className="flex items-center w-full min-h-[2.5rem] md:w-auto font-bold   text-gray-800 py-2 px-4 hover:bg-gray-200 hover:text-white rounded-full transition-colors my-10"
          aria-label="restar"
          onClick={() => restar()}
        >
          <GrSubtract className="text-xs" />{" "}
        </button>
        </div>
        <button
        onClick={()=> agregarCarrito()}
        className=" flex items-center w-full md:w-auto font-bold  border border-gray-800 text-gray-800 py-2 px-4 hover:bg-black hover:text-white rounded-xl transition-colors mb-10">
          <AiOutlineShoppingCart className="text-xl mr-2 font-bold" />
          Agregar al Carrito
        </button>
    </>
  );
};

export default ItemCount;
