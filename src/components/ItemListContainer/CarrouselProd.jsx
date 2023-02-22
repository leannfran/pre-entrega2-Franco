import {Link} from "react-router-dom";
import { Carousel, Button } from "flowbite-react";
import DropDw from "../Navbar/DropDw";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
const CarrouselProd = () => {
  return (
    <>
      <div className=" w-full flex flex-col justify-center aling-items">
        <h4 className="text-6xl font-semibold mt-10 mx-20 text-center tracking-wide ">
          Nuestros{" "}
          <span className="tracking-wide border-b-2 border-primary ">
            Productos
          </span>{" "}
        </h4>
        <p className=" text-xl font-light mt-10 mx-20 text-center tracking-wider">
          Descubre los mejores suplementos para alcanzar tus metas y Maximiza tu
          potencial.
        </p>
      </div>
      <div className="my-10 h-56 sm:h-64 xl:h-78 2xl:h-96">
        <Carousel slideInterval={2000}>
          <img
            className="max-w-[300px]"
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-react-coder-11bdc.appspot.com/o/ADVANCED-WHEY-FRUTILLA.png?alt=media&token=3e7726a9-6ebc-407a-b708-2bf934fb2f7c"
            alt="..."
          />
          <img
            className="max-w-[300px]"
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-react-coder-11bdc.appspot.com/o/Creatine-500.500.png?alt=media&token=436b6406-144d-43e7-9d16-6ce0843500f2"
            alt="..."
          />
          <img
            className="max-w-[250px]"
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-react-coder-11bdc.appspot.com/o/BEST-WHEY-BIG-SIZE-FRUTILLA.jpeg?alt=media&token=b900f2cc-9c18-45af-9ab0-c7421d32f6ce"
            alt="..."
          />
          <img
            className="max-w-[300px]"
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-react-coder-11bdc.appspot.com/o/HYDRO-BCAA-PRO--punch.500.png?alt=media&token=a153fbb0-b255-49b6-b425-412028772827"
            alt="..."
          />
        </Carousel>
      </div>
      <div className="flex justify-center aling-center">      
      <MdArrowDropDown/>
      </div>
    </>
  );
};

export default CarrouselProd;
