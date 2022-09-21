import React, {useContext}from "react";
import { Link } from "react-router-dom";
// import { UseartContext } from "../CartContext";
// import ItemCount2 from "./itemcount2";
const Tarjeta = ({info}) =>{

    // const nombre= useContext(UseartContext)
    // console.log("Item :", nombre)
    
    //   const onAdd = (e) => {
    //       console.log(` Productos seleccionados ${e}`)
    //   }
    return(
    <div className="navegacion">
  <div class="col-12 col-md-6">
      <div class="card shadow">
          <img src={info.foto} class="card-img-top rounded-top"/>
          <div class="card-body">
              <h3 class="h5 card-title mt-3">{info.titulo}</h3>
              <p class="card-text">{info.descripcion}</p>
              <p class="card-text">$ {info.precio}</p>
              <Link to={`/detalle/${info.id}`} className="btn btn-primary"> Ver mas</Link>
                            {/* <ItemCount2 stock={info.stock}  onAdd={onAdd}  /> */}
          </div>
      </div>
  </div>
</div>
)}

export default Tarjeta