import React from "react"
import { useState } from "react"


const BotonContando = () =>{
    const [botonContar, botonContara] = useState(1)
    if(botonContar==0){
      botonContara(botonContar+1)
    }
    return(
        <div className="botones">
         <p>{botonContar}</p>
         <button className="btn" onClick={() => {
            botonContara (botonContar +1)
         }}> <i className="fa-solid fa-plus"></i></button>
         <button className="btn" onClick={() => {
            botonContara (botonContar -1)
         }}> <i className="fa-solid fa-minus"></i>  </button>
        </div>
    )
    
}


export default BotonContando