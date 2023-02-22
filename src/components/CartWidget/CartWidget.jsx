import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
const CartWidget =  ({cantCarrito}) => {
    return (
    <div className="relative carrito flex flex-col jusify-center items-center">
        <p className='absolute -top-2.5 left-2.5 text-white text-xs'>{cantCarrito}</p>
        <AiOutlineShoppingCart className='text-3xl text-white hover:text-primary transition' />
    </div>
    );
}

export default CartWidget;
