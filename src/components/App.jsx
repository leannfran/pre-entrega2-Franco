import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react";
//componentes
import Navbar from "./Navbar/Navbar";
import Hero from './Hero/Hero'
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Contacto from "./Contacto/Contacto";
import Footer from "./footer/footer";

function App() {
  return (
    <>
   <BrowserRouter>
      <Navbar/>
       <Routes>
       <Route path='/' element={<Hero/>}/> 

        <Route path='/Productos' element={<ItemListContainer/>}/> 

        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/Contacto' element={<Contacto/>}/> 
      </Routes> 
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
