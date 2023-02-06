import React from 'react';
import { GrAdd,GrSubtract } from "react-icons/gr";

import { useState } from 'react';

const ItemCount = ({valorInicial, stock}) => {

const [contador, setContador] = useState(1);
    return (
        <>  <div className='flex items-center'>

            <button className="flex items-center min-h-[2.5rem] w-full  md:w-auto font-bold   text-gray-800 py-2 px-4 hover:bg-gray-200 hover:text-white rounded-full transition-colors my-10" aria-label="sumar" onClick={()=> (contador < stock ) && setContador(contador + 1)}>
            <GrAdd className='text-xs'/>
            </button>   
           <p className='font-light text-2xl px-3'> {contador}
            </p> 
            <button className="flex items-center w-full min-h-[2.5rem] md:w-auto font-bold   text-gray-800 py-2 px-4 hover:bg-gray-200 hover:text-white rounded-full transition-colors my-10" aria-label="restar" onClick={()=> (contador > valorInicial ) && setContador(contador - 1)}>
            <GrSubtract className='text-xs'/>        </button>   
        </div>
        </>
    );
}

export default ItemCount;

