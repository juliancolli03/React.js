

import React from 'react';
import { useCartContext } from '../CartContext';
import ItemCount2 from "./itemcount2";
import { useState } from 'react';
import { Link } from 'react-router-dom';



const ItemDetail = ({ item }) => {
    const onAdd = (quantity) => {
        setToCart(true)    
    addProduct(item,quantity)
    }

    const [goToCart, setToCart] = useState(false)
    const {addProduct} = useCartContext()

    return (
        <div className='superetalle'>
         <div className='bodyDetalle col-md-4'>
        
        <div className="d-flex">
            <img src={item.foto} className="col-md-8" />
            <br></br>
            <hr></hr>
            <div className="col-md-12 ol">
                <h2>{item.titulo}</h2>
                <p>
                    {item.descripcion}
                </p>
                <h3>${item.precio}</h3>
                {goToCart ?
                <div>
                    <Link className='btn comprar' to='/cart'>Terminar compra</Link><br />
                    
                    <br />
                    
                    

                  <Link className='btn btn-primary ' to='/'>Seguir comprando</Link>
                </div>                :<ItemCount2 stock={item.stock}  onAdd={onAdd}  />
}
            </div>
        </div>
        
        
        </div>
        </div>
    );
};

export default ItemDetail;