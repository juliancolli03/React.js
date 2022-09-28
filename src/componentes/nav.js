import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () =>{
    const tituloDelNav = ["HouseTec"]

    return(
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <NavLink to ={ `` } className="botom d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-3 d-none d-sm-inline">{tituloDelNav.map(i => (i))}</span>
                    </NavLink>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
       
       <li className="nav-item">
                            <NavLink to={"/"} className="nav-link align-middle px-0">
                                <i className="fa-solid fa-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={"/productos"}  className="nav-link align-middle px-0">
                            <i className="fa-solid fa-basket-shopping"></i> <span className="ms-1 d-none d-sm-inline">Productos</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to={"cart"} className="nav-link align-middle px-0">
                        <i className="fa-solid fa-cart-arrow-down"></i> <span className="ms-1 d-none d-sm-inline"> Carrito</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/productos/celular'} className="nav-link align-middle px-0">
                    <i className="fa-solid fa-mobile-retro"></i> <span className="ms-1 d-none d-sm-inline"> Celulares</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/productos/otros'} className="nav-link align-middle px-0">
                    <i className="fa-solid fa-thin fa-tv"></i><span className="ms-1 d-none d-sm-inline"> Otros</span>
                    </NavLink>
                </li>
                {/* <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                    <i className="fa-solid fa-user-check"></i> <span className="ms-1 d-none d-sm-inline">Usuario</span>
                </a>
            </li> */}
       
       </ul>
                </div>
            </div>
    )
}

export default NavBar