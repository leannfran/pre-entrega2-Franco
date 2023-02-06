import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react";
//componentes
import Navbar from "./Navbar/Navbar";
import Hero from './Hero/Hero'
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
