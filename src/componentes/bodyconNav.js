import React from "react";
import Menus from "./menus";
import Xiaomi from "../imagenes/xiaomi.jpg"
import Iphone from "../imagenes/iphone.jpg"
import Ps5 from "../imagenes/ps5.jpg"
import Samsung from "../imagenes/Samsung.jpg"
const tituloDelNav = ["HouseTec"]
const bodyConNav = () => {
    return(
        <div >
         
         <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a className="botom d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-3 d-none d-sm-inline">{tituloDelNav.map(i => (i))}</span>
                    </a>
                    <Menus/>
                </div>
            </div>
            <div className="col py-3">
                <h3>HouseTec Argentina</h3>
                <p className="lead"> Bienvenidos a HouseTec Argentina, la casa de tecnologia mas importante de toda Argentina. En este sitio web vas a poder encontrar nuestros productos a los mejores precios del mercado.
                </p>
            <h3> Nuestros Productos</h3>
            
            </div>
        </div>
        </div>
        </div>
    
    )
}




export default bodyConNav