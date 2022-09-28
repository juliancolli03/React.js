import React, {useState, useEffect} from "react";
import ItemCounts from "./item"
import Productos from "./productos"
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, getDoc, query, where } from 'firebase/firestore';

// import TituloTarjeta from "./tarjetas"
// import { useEffect } from "react";


// const productos = [
//     {
//     id:1, titulo:"Samsung S12 +", descripcion:"El S12 + es el smartphone mas poderoso de la gama alta de samsung. Cuenta con una gran camara frontal y trasera. Tambien tiene un procesador genial.", foto: "../imagenes/Samsung.jpg", precio:5000, stock:99
// },{
//     id:2, titulo:"PS5", descripcion:"La nueva generacion de la consola mas popular llego a HouseTec. Cuenta con un gran procesador que te puede correr cualquier tipo de juego.", foto: "../imagenes/ps5.jpg", precio:4000, stock:22
// },{
//     id:3, titulo:"Iphone 12", descripcion:"El nuevo Iphone llego al mercado para cumplir records! Con una camara de una gran resolucion, y un sistema operativo intuitivo es un celular muy versatil.", foto: {Iphone}, precio:8800, stock:4
// },{
//     id:4, titulo:"Xiaomi MIX", descripcion:"Los smartphones Asiaticos estan revolucionando el mercado! Este nuevo smartphone es de los mejores teniendo en cuenta su calidad por su precio. ", foto: {Xiaomi}, precio:4000, stock:10
// }]

// const tituloDelNav = ["HouseTec"]
const Bodyy = ({texto}) => {
    const [data, setData]=useState([])

const {categoriaId} = useParams()

    useEffect(()=>{
        // const getData= new Promise((resolve) => {
        //     setTimeout(()=>{
        //         resolve(Productos)
        //     },1000)
        // })
        const querydb = getFirestore()
        const queryCollection = collection(querydb,"productos")
        if(categoriaId){
        const queryFilter = query(queryCollection,where("categoria", "==",categoriaId))
         getDocs(queryFilter)
        // .then(res=>setData(res.docs.map(producto=>({id: producto.id, ...producto.data()}))))
        .then(res=>setData(res.docs.map(producto=>({id: producto.id, ...producto.data()}))))


         }
         else{
          getDocs(queryCollection)
          .then(res=>setData(res.docs.map(producto=>({id: producto.id, ...producto.data()}))))
              
        }
    },[categoriaId])
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
            {texto}
            <ItemCounts data={data}/>
            </div>
            <br></br>
            <div className="margen"> </div>
            <br></br>
            <footer className="shadow-lg text-center text-white" >
  <div className="container pt-4">
    <section className="mb-4">
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://wa.me/5491169253825"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fa-brands fa-whatsapp"></i
      ></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.instagram.com/juliann_colli03/?hl=es"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-instagram"></i
      ></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/in/julian-colli-05395a231/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i
      ></a>
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://github.com/juliancolli03"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-github"></i
      ></a>
    </section>
  </div>

  <div className="text-center text-dark p-3" >
    <p>
  <span className="spann"> © </span> 2022 Diseño echo por <span className="spann"> Julian Colli </span>, todos los derechos reservados.
  </p> </div>
</footer>

          </div> 
          )
}




export default Bodyy