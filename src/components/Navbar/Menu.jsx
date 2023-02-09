import React from 'react';
import { useState } from 'react';
import { RiCodeSSlashFill, RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import DropDw from './DropDw';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div>
             <nav className={`fixed bg-black z-10 text-white w-[50%] l:w-[40%] xl:w-[20%] h-full ${showMenu ? "left-0" : "-left-full"} top-0  flex-1 flex  flex-col xl:flex-col items-start justify-start	 transition-all duration-500 `}>
                <button className=" text-2xl mt-10 ml-10 hover:text-primary transition" onClick={()=>setShowMenu(!showMenu)}>
                {showMenu ? <RiCloseLine/> : <RiMenu2Line/>}
                </button>
                <Link to={"/"} className="mt-10 ml-10 font-semibold hover:text-red-600 hover: transition-all  ">Inicio</Link>
                <Link to={"/Productos"} className="mt-10 ml-10 font-semibold hover:text-red-600 hover: transition-all ">Productos</Link>
                <DropDw/>
                <Link to={"/"} className="mt-10 ml-10 font-semibold hover:text-red-600 hover: transition-all ">Asesorias</Link>
                <Link to={"/Contacto"} className="mt-10 ml-10 font-semibold hover:text-red-600 hover: transition-all ">Contacto</Link>
                

            </nav>
            <button className=" text-2xl text-white hover:text-primary transition-all" onClick={()=>setShowMenu(!showMenu)}>
            {showMenu ? <RiCloseLine/> : <RiMenu2Line/>}
            </button>
        </div>
    );
}

export default Menu;
