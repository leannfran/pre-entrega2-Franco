import {Link} from 'react-router-dom';

import { AiOutlineShoppingCart } from "react-icons/ai";
const Item = ({item}) => {
    return (
      <div className="bg-white w-[260px] max-h mx-auto rounded-lg shadow-2xl ">
      <div className="py-4 px-6 flex flex-col ">
          <a href="#" className="text-2xl font-bold text-black">{item.nombre}</a>
          <p className="text-black">{item.marca}</p>
          <p className="text-gray-500">{item.cantidad} {item.sabor}</p>
          <p className="text-gray-500"></p>

      </div>
      <div>
          <img
            src={`../img/${item.img}`}
            alt={item.nombre}
            className="w-full object-cover"/>
      </div>
      <div className="py-4 px-6 flex items-center justify-between bg-black rounded-bl-lg rounded-br-lg">
          <span className="text-white font-bold">${new Intl.NumberFormat('de-DE').format(item.precio) }</span>
          <a className="flex text-white hover:text-grey-300 transition-colors font-semibold outline-none ">
          <p className='relative cursor-pointer hover:text-gray-300 transition-colors hover:hover:underline transition '>< AiOutlineShoppingCart className='absolute -left-5 top-1' /><Link to={`/item/${item.id}`}> VER MAS</Link> </p> 
          </a>
      </div>
    </div>
    );
}

export default Item;
