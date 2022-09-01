import React from "react";
import Itemconunt from "./Itemcount"

const tarjeta = (props) =>{
    return(
    <div className="navegacion">
  <div class="col-12 col-md-6">
      <div class="card shadow">
          <img src={props.imagen} class="card-img-top rounded-top"/>
          <div class="card-body">
              <h3 class="h5 card-title mt-3">{props.titulo}</h3>
              <p class="card-text">{props.descripcion}</p>
              <a href="#" class="btn btn-primary btn-sm">Agregar al carrito</a>
              <Itemconunt />
          </div>
      </div>
  </div>
</div>
)}

export default tarjeta