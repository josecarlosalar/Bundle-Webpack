import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./services/firestore";
require("firebase/firestore");


export const FireComponent = () => {
  
  const [nombre, setNombre] = useState(null);
  useEffect(() => {

    const obtenerDatos = async () => {
        
        try {
            
            const querySnapshot = await getDocs(collection(db, "usuarios"));
            querySnapshot.forEach((doc) => {
              
              console.log(doc.data().Nombre);
              setNombre(doc.data().Nombre);
            });
        } catch (error) {
            console.log(error)
        }
    }
    obtenerDatos()

  }, [])

  return (
    <>
      <h1>Hello {nombre} !</h1>
    </>
  );
}