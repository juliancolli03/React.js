import React from "react";
import Tarjetass from "./tarjetas"
import ItemDetailContainer from "./itemdetailconteiner";


const ItemList = ({data =[]}) =>{



    return(
        data.map(productos => <Tarjetass key={productos.id} info={productos}/>)
    )
}

export default ItemList