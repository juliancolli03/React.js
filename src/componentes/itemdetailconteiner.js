import React, { useEffect, useState } from "react";
import Productos from "./productos"
import ItemDetail from "./itemdetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams() 

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const product = Productos.find((prod) => prod.id === parseInt(id));
                setTimeout(() => {
                    res(product);
                }, 3000);
            });

        getProduct()
            .then((info) => {
                setItem(info);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );
}



    export default ItemDetailContainer