import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const DropDw = React.memo(() => {
  const [drop, setDrop] = useState(false);

  return (
    <Menu
      as="div"
      className="mt-10 ml-10 font-semibold    relative inline-block "
    >
      <div>
        <Menu.Button
          className="flex w-auto items-center justify-center text-white hover:text-red-600 hover: transition-all "
          onClick={() => setDrop(!drop)}
        >
          Categorias {drop ? <MdArrowDropUp /> : <MdArrowDropDown />}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute bg-black jusitfy-center    z-10 mt-2  origin-top-left rounded-md  ">
          <div className="py-1 flex flex-col justify-center items-end">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={"category/Proteinas"}
                  className="px-4 py-2 hover: hover:text-red-600 transition-all duration-300 "
                >
                  Proteinas
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={"category/Aminoacidos"}
                  className="px-4 py-2 hover: hover:text-red-600 transition-all duration-300"
                >
                  Aminoacidos
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={"category/Mass Gainer"}
                  className="px-4 py-2 hover: hover:text-red-600 transition-all duration-300"
                >
                  Mass Gainer
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={"category/Accesorios"}
                  className="px-4 py-2 hover: hover:text-red-600 transition-all duration-300"
                >
                  Accesorios
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
});

export default DropDw;
