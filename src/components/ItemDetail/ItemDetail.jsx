import Saboresdrop from './SaboresDrop';
import ItemCount from '../ItemCount/ItemCount'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Itemdetail = ({item}) => {
    return (
        <div className='bg-gray-100 flex-col md:flex-row w-full h-full flex  rounded-xl '>
            <div className='min-w-full md:min-w-[50%] flex flex-col items-center justify-center bg-'>
                <h5 className='text-2xl  md:text-4xl font-semibold md:mt-20 md:hidden'>{item.nombre}</h5>
                <p className='text-xl font-light text-blackss md:hidden'>{item.marca}</p>
                <img className='' src={`../img/${item.img}`} alt={`imagen de ${item.nombre}`}  />
            </div>

            <div className='flex flex-col justify-center items-center md:items-start'>
            <h5 className='text-2xl  md:text-4xl font-semibold hidden md:inline-block md:mt-16 '>{item.nombre}</h5>
            <p className='text-xl font-light text-black mb-10 hidden md:inline-block'>{item.marca} {item.cantidad}</p>
            

                
                <p className='text-xl font-bold text-gray-800 mt-10 mb-3'>${new Intl.NumberFormat('de-DE').format(item.precio) }</p>
                <p className='text-l text-center md:text-start font-light text-gray-600 mr-10 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores illum adipisci vel eos voluptas doloribus ipsum vero atque temporibus ut.</p>
                <ItemCount valorInicial={1}stock={item.stock}/>
                <button className=" flex items-center w-full md:w-auto font-bold  border border-gray-800 text-gray-800 py-2 px-4 hover:bg-black hover:text-white rounded-xl transition-colors mb-10">  
                <AiOutlineShoppingCart className='text-xl mr-2 font-bold'/>
                Agregar al Carrito</button>
                
            


            </div>

        </div>
    );
}

export default Itemdetail;
