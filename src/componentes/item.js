import React from "react";
import Tarjetass from "./itemlist"


const ItemList = ({data =[]}) =>{



    return(
        data.map(productos => <Tarjetass key={productos.id} info={productos}/> )
        
    )
}

export default ItemList