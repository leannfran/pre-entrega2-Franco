import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
  return (
    <div className="w-[100%] bg-black shadow-md ">
      <header className="flex justify-between items-center h-20 px-10 z-50">
        <Menu />

        <h1 className="text-2xl text-white font-bold hover:text-primary transition">
          <Link to={"/"}>FronFitnes</Link>
        </h1>

          <CartWidget />
      </header>
    </div>
  );
};

export default Navbar;
