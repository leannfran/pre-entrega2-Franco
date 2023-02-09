import { useForm } from "react-hook-form";
import React from 'react';

const Contacto = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div className=" hero  bg-center  bg-cover bg-no-repeat w-full h-[90vh] flex flex-center justify-center">

    <form className='bg-black p-20  rounded-md  flex flex-col gap-5 m-10  'onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-white text-2xl font-semibold">Contacto</h3>
    <input type="text" className="rounded-md  border-primary hover: w-[20rem]" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
    <input type="text" className="rounded-md w-[20rem] border-primary" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
    <input type="text" className="rounded-md w-[20rem] border-primary" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
    <input type="tel" className="rounded-md w-[20rem] border-primary" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

    <input className="border-2 font-semibold border-primary text-primary py-2 px-6 hover:bg-primary hover:text-white rounded-md transition-colors "  type="submit" />
  </form>
    </div>
);
}

export default Contacto;
