import React, { useContext } from "react";
import { CartContext } from "../App";

export const CardWidget = () =>{
    const nombre = useContext(CartContext)
    console.log("CardWidget", nombre)
}


export default CardWidget