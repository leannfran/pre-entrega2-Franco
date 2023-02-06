import React from 'react';

const Hero = () => {
    return (
        <div class="  hero bg-black bg-fixed bg-center  bg-cover bg-no-repeat w-full min-h-[95vh] "  > 
            <div className='flex flex-col justify-start items-center bg-gradient-to-t from-black to-transparent gap-16 min-h-[95vh] '>

            <h2 className="text-4xl md:text-8xl uppercase font-extrabold tracking-[15px] lg:tracking-[30px] text-white mt-16  ">
                FRON<span className="border-b text-primary border-primary">FITNES</span>
            </h2>
            <p className='text-white italic font-light text-center text-l tracking-wider leading-[2.5rem]'>
            Entrenamiento personalizado y suplementos deportivos de <br /> alta calidad para mejorar la salud y rendimiento.
            </p>
            <div>
                        <button className="bg-primary font-semibold border-2 border-primary text-white py-2 px-8 rounded-full w-[15]" href="http://">
                            SUPLEMENTACION
                        </button>
                        <button className="border-2 font-semibold border-primary text-primary py-2 px-6 hover:bg-primary hover:text-white rounded-full transition-colors ml-3">
                            ASESORIAS
                        </button>

            </div>
            </div>
        </div>
    );
}

export default Hero;
