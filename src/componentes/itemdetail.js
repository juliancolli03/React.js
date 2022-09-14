

import React from 'react';

const ItemDetail = ({ item }) => {
    return (
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
    );
};

export default ItemDetail;