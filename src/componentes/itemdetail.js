

import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    return (
        // <Link to={"/productos${item.id}"} >
        <div className="detail">
            <img src={item.foto} />
            <div className="infoDetail">
                <h2>{item.titulo}</h2>
                <p>
                    {item.descripcion}
                </p>
                <h3>${item.precio}.-</h3>

            </div>
        </div>
        // </Link>
    );
};

export default ItemDetail;