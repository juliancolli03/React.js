import React from "react";


const tarjeta = (props) =>{
    return(
    <div>
  <div class="col-12 col-md-6">
      <div class="card shadow">
          <img src={props.imagen} class="card-img-top rounded-top"/>
          <div class="card-body">
              <span class="h6 icon-tertiary small"><span class="fas fa-medal me-2"></span>Awards</span>
              <h3 class="h5 card-title mt-3">We partnered up with Google</h3>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary btn-sm">Learn More</a>
          </div>
      </div>
  </div>
</div>
)}

export default tarjeta