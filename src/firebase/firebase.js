// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDoc, getDocs, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCxLlPII9nR09IwzQEABDDZltSYXjwRcMU",
  authDomain: "ecommerce-react-coder-11bdc.firebaseapp.com",
  projectId: "ecommerce-react-coder-11bdc",
  storageBucket: "ecommerce-react-coder-11bdc.appspot.com",
  messagingSenderId: "102035643458",
  appId: "1:102035643458:web:1f6e59a2edb31dfa9821db",
  measurementId: "G-WMXPEDKL7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();//consultar base de datos
//con esta funcion cargamos los productos desde el .json a la base de datos de firestore
export const cargarBDD = async () => {
      const promise = await fetch('./json/productos.json');
      const productos = await promise.json()
      productos.forEach( async (prod) => {
          await addDoc(collection(db,"productos"), {
              nombre: prod.nombre,
              marca: prod.marca,
              cantidad: prod.cantidad,
              idCategoria: prod.idCategoria,
              stock: prod.stock,
              precio: prod.precio,
              img: prod.img,
              sabor: prod.sabor
          })
      })
  }

  //con esta funcion obtenemos los productos de la base de datos
 export const getProductos = async() => {
      const productos = await getDocs(collection(db,"productos"))
      const items = productos.docs.map(prod => {
          return {...prod.data(), id: prod.id}//los ... copian un objeto(javascript)
      })
return items
  }
  export const getProducto = async(id) =>{
      const producto = await getDoc(doc(db, "producto", id))
      const item = {...producto.data(), id: producto.id}
  return item
    }
  