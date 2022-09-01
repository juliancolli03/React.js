import React from "react"
import { useState } from "react"


const botonContando = () =>{
    const [botonContar, botonContara] = useState(1)

     return(
        <div className="botones">
        
         <p>{botonContar}</p>
         <button onClick={() => {
            botonContara (botonContar ++)
         }}> <i className="fa-solid fa-plus"></i></button>
         <button onClick={() => {
            botonContara (botonContar --)
         }}> <i className="fa-solid fa-minus"></i>  </button>
        </div>
    )
}


export default botonContando