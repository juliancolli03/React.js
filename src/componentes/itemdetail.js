

import React from 'react';
import ItemCount2 from "./itemcount2";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ItemDetail = ({ item }) => {
    const onAdd = () => {
        setToCart(true)    }

    const [goToCart, setToCart] = useState(false)

    return (
        <div className="detail">
            <img src={item.foto} className="card-img-top rounded-top" />
            <div className="infoDetail">
                <h2>{item.titulo}</h2>
                <p>
                    {item.descripcion}
                </p>
                <h3>${item.precio}</h3>
                {goToCart ?
                                <Link to="/cart"> terminar</Link>
                :<ItemCount2 stock={item.stock}  onAdd={onAdd}  />
                // <Link to="/cart"> terminar</Link>
           
                    
                }
                {/* <ItemCount2 stock={item.stock}  onAdd={onAdd}  /> */}
            </div>
        </div>
        // </Link>
    );
};

export default ItemDetail;