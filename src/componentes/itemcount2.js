import React,{ useState } from "react";

const ItemCount = ({ stock, onAdd}) =>{
    const [count, setCount] = useState(1)
    const decrease = () =>{
        setCount(count-1)
    }
    const increase = () =>{
        setCount(count+1)

    }


      
    
    
    return(
        <div className="counter">
            <button className="btn" disabled={count <=1} onClick={decrease}>
            -
            </button>
            
            <span>{count}</span>

            <button className="btn" disabled={count >= stock} onClick={increase}>
            +
            </button>

            <button className="btn btn-primary btn-sm" disabled={stock <= 0 } onClick={()=> onAdd(count)}> Agregar</button>
        </div>
    )
}

export default ItemCount