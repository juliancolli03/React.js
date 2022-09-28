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
  <div className="col-12 col-md-6">
      <div className="card shadow">
          <img src={info.foto} className="card-img-top rounded-top"/>
          <div className="card-body">
              <h3 className="h5 card-title mt-3">{info.titulo}</h3>
              <p className="card-text">{info.descripcion}</p>
              <p className="card-text">$ {info.precio}</p>
              <Link to={`/detalle/${info.id}`} className="btn btn-primary"> Ver mas</Link>
                            {/* <ItemCount2 stock={info.stock}  onAdd={onAdd}  /> */}
          </div>
      </div>
  </div>
</div>
)}

export default Tarjeta