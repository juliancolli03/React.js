import React, { useEffect, useState } from "react";
import Productos from "./productos"
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "./itemdetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    // const [item, setItem] = useState({});
    // const {id} = useParams() 
    const [item, setItem] = useState({});
    const {id} = useParams() 

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb,"productos",id)
        getDoc(queryDoc)
        .then(res => setItem({id: res.id, ...res.item()}))

    

        // const getProduct = () =>
        //     new Promise((res, rej) => {
        //         const product = Productos.find((prod) => prod.id === parseInt(id));
        //         setTimeout(() => {
        //             res(Productos);
        //         }, 3000);
        //     });

        // getProduct()
        //     .then((info) => {
        //         setItem(info.find(e => e.id === parseInt(id)));
        //     })
            
    }, [id])



    // useEffect(() => {
    //     const querydb = getFirestore();
    //     const queryDoc = doc(querydb,"productos",id)
    //     getDoc(queryDoc)
    //     .then(res => setItem({id: res.id, ...res.item()}))

    

        // const getProduct = () =>
        //     new Promise((res, rej) => {
        //         const product = Productos.find((prod) => prod.id === parseInt(id));
        //         setTimeout(() => {
        //             res(Productos);
        //         }, 3000);
        //     });

        // getProduct()
        //     .then((info) => {
        //         setItem(info.find(e => e.id === parseInt(id)));
        //     })
            
    // }, [id])
    return (
        <div className="responsive">
            <ItemDetail item={item} />
        </div>
    );
}



    export default ItemDetailContainer