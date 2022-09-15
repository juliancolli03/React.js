import React from "react";
import { Link } from "react-router-dom";

const listas = (props) =>{
    return(
<li className="nav-item">
                            <Link to={``} className="nav-link align-middle px-0">
                                <i className={props.icono}></i> <span className="ms-1 d-none d-sm-inline">{props.tipo}</span>
                            </Link>
                        </li>
    )
}
export default listas