import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/carritoContext';
const CartWidget =  () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        
    <div className="relative carrito flex flex-col jusify-center items-center">
                <Link to={"/Carrito"}>


        {getItemQuantity() > 0 &&  <p className='absolute -top-2.5 left-2.5 text-white text-xs'>{getItemQuantity()}</p>}
        <AiOutlineShoppingCart className='text-3xl text-white hover:text-primary transition' />
    
                </Link>
    </div>
    );
}

export default CartWidget;
