import React from "react";
import Menus from "./menus";
import { Link } from "react-router-dom";


const NavBar = () =>{
    const tituloDelNav = ["HouseTec"]

    return(
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <Link to ={ ` # ` } className="botom d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-3 d-none d-sm-inline">{tituloDelNav.map(i => (i))}</span>
                    </Link>
                    <Menus/>
                </div>
            </div>
    )
}

export default NavBar