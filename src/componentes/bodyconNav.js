import React, {useState, useEffect} from "react";
import Menus from "./menus";
import Xiaomi from "../imagenes/xiaomi.jpg"
import Iphone from "../imagenes/iphone.jpg"
import Ps5 from "../imagenes/ps5.jpg"
import Samsung from "../imagenes/Samsung.jpg"
import ItemCounts from "./item"
// import TituloTarjeta from "./tarjetas"
// import { useEffect } from "react";


const productos = [
    {
    id:1, titulo:"Samsung S12 +", descripcion:"El S12 + es el smartphone mas poderoso de la gama alta de samsung. Cuenta con una gran camara frontal y trasera. Tambien tiene un procesador genial.", foto: "../imagenes/Samsung.jpg", precio:5000, stock:99
},{
    id:2, titulo:"PS5", descripcion:"La nueva generacion de la consola mas popular llego a HouseTec. Cuenta con un gran procesador que te puede correr cualquier tipo de juego.", foto: {Ps5}, precio:4000, stock:22
},{
    id:3, titulo:"Iphone 12", descripcion:"El nuevo Iphone llego al mercado para cumplir records! Con una camara de una gran resolucion, y un sistema operativo intuitivo es un celular muy versatil.", foto: {Iphone}, precio:8800, stock:4
},{
    id:4, titulo:"Xiaomi MIX", descripcion:"Los smartphones Asiaticos estan revolucionando el mercado! Este nuevo smartphone es de los mejores teniendo en cuenta su calidad por su precio. ", foto: {Xiaomi}, precio:4000, stock:10
}]

// const tituloDelNav = ["HouseTec"]
const Bodyy = () => {
    const [data, setData]=useState([])

    useEffect(()=>{
        const getData= new Promise((resolve) => {
            setTimeout(()=>{
                resolve(productos)
            },3000)
        })
        getData.then(res=>setData(res))
    },[])
    return(

            
            <div className="col py-3">
                <h3>HouseTec Argentina</h3>
                <p className="lead"> Bienvenidos a HouseTec Argentina, la casa de tecnologia mas importante de toda Argentina. En este sitio web vas a poder encontrar nuestros productos a los mejores precios del mercado.
                </p>
            <h3> Nuestros Productos</h3>
            <div className="Items">
            
            {/* <TituloTarjeta  imagen = {Samsung} titulo = {"Samsung S12 +"} descripcion={"El S12 + es el smartphone mas poderoso de la gama alta de samsung. Cuenta con una gran camara frontal y trasera. Tambien tiene un procesador genial."} 
           />                */}
            {/* <TituloTarjeta imagen = {Ps5} titulo ={"Play 5"} descripcion={"La nueva generacion de la consola mas popular llego a HouseTec. Cuenta con un gran procesador que te puede correr cualquier tipo de juego."}/> */}
            <ItemCounts data={data}/>
            </div>

           </div> 
          
        
    
    )
}




export default Bodyy