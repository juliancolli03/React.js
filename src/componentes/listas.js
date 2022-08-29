import React from "react";

const listas = (props) =>{
    return(
<li className="nav-item">
                            <a href="#" className="nav-link align-middle px-0">
                                <i className={props.icono}></i> <span className="ms-1 d-none d-sm-inline">{props.tipo}</span>
                            </a>
                        </li>
    )
}
export default listas