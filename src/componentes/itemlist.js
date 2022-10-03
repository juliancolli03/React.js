import React, {useContext}from "react";
import { Link } from "react-router-dom";

const Tarjeta = ({info}) =>{

    return(
    <div className="navegacion">
  <div className="col-12 col-md-6">
      <div className="card shadow">
          <img src={info.foto} className="card-img-top rounded-top"/>
          <div className="card-body">
              <h3 className="h5 card-title mt-3">{info.titulo}</h3>
              <p className="card-text">{info.descripcion}</p>
              <p className="card-text">$ {info.precio}</p>
              <Link to={`/detalle/${info.id}`} className="btn btn-primary"> Ver mas</Link>
          </div>
      </div>
  </div>
</div>
)}

export default Tarjeta