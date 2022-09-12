import React from "react";
import Tarjetass from "./tarjetas"


const ItemList = ({data =[]}) =>{
    return(
        data.map(productos => <Tarjetass key={productos.id} info={productos}/>)
    )
}

export default ItemList