import React from "react";
import Listas from "./listas";
const menus = () =>{
    return(
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
       
       <Listas icono = "fa-solid fa-house" tipo ="Home"/>
       <Listas icono = "fa-solid fa-basket-shopping" tipo ="Productos"/>
       <Listas icono = "fa-solid fa-cart-arrow-down" tipo ="Carrito"/>
       <Listas icono = "fa-solid fa-user-check" tipo ="Usuario"/>
       
       </ul>
    )
}

export default menus