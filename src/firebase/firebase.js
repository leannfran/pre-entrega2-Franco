// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCxLlPII9nR09IwzQEABDDZltSYXjwRcMU",
  authDomain: "ecommerce-react-coder-11bdc.firebaseapp.com",
  projectId: "ecommerce-react-coder-11bdc",
  storageBucket: "ecommerce-react-coder-11bdc.appspot.com",
  messagingSenderId: "102035643458",
  appId: "1:102035643458:web:1f6e59a2edb31dfa9821db",
  measurementId: "G-WMXPEDKL7L"
};
const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();//consultar base de datos

export const cargarBDD = async () => {
      const promise = await fetch('./json/productos.json');
      const productos = await promise.json()
      productos.forEach( async (prod) => {
          await addDoc(collection(db,"productos"), {
              nombre: prod.nombre,
              marca: prod.marca,
              modelo: prod.modelo,
              idCategoria: prod.idCategoria,
              stock: prod.stock,
              precio: prod.precio,
              img: prod.img,
              sabdor: prod.sabor
          })
      })
  }
  