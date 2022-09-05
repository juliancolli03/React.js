import React from "react"
import { useState } from "react"

const BotonContando = (inicial,stock,onAdd) =>{
  const [botonContar, botonContara] = useState(1)
  
  if(botonContar==0){
     botonContara(botonContar+1)
   }
  return(
    <div className="botones">
    <a onClick={()=>onAdd(botonContar)} href="#" class="btn btn-primary btn-sm">Agregar al carrito</a>
<p>{botonContar}</p>
<button  className="btn" onClick={() => {
botonContara (botonContar +1)
if(botonContara === stock){
  alert("s")
}
}}> <i className="fa-solid fa-plus"></i></button>
<button  className="btn" onClick={() => {
botonContara (botonContar -1)
}}> <i className="fa-solid fa-minus"></i>  </button>
</div>
  )
  
}


export default BotonContando