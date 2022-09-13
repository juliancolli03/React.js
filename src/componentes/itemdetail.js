

import React from 'react';
import ItemCount from './itemcount2';

const ItemDetail = ({ item }) => {
    return (
        <div className="detail">
            <img src={item.img} alt={item.title} />
            <div className="infoDetail">
                <h2>{item.title}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Reiciendis ratione aliquam ducimus debitis quibusdam? Nulla
                    molestiae voluptates, ex sapiente, non porro omnis provident
                    a hic facere, ab deleniti commodi aut!
                </p>
                <h3>${item.price}.-</h3>

                <ItemCount stock={10} initial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;