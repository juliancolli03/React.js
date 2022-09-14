import React, { useEffect, useState } from "react";
import Productos from "./productos"
import ItemDetail from "./itemdetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const getProduct = () =>
            new Promise((res, rej) => {
                const product = Productos.find((prod) => prod.id === 1);
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