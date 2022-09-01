import React from "react";


const tarjeta = (props) =>{
    return(
    <div className="navegacion">
  <div class="col-12 col-md-6">
      <div class="card shadow">
          <img src={props.imagen} class="card-img-top rounded-top"/>
          <div class="card-body">
              <span class="h6 icon-tertiary small"><span class="fas fa-medal me-2"></span>Awards</span>
              <h3 class="h5 card-title mt-3">{props.titulo}</h3>
              <p class="card-text">{props.descripcion}</p>
              <a href="#" class="btn btn-primary btn-sm">Agregar al carrito</a>
          </div>
      </div>
  </div>
</div>
)}

export default tarjeta