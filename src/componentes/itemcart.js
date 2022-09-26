import React from 'react'
import { useCartContext } from '../CartContext';


const ItemCart = ({ product }) => {
    const { removeProduct } =  useCartContext();
  return (
    <div className='itemCart'>
        <img src={product.foto}  />
        <div>
            <p>Título: {product.titulo}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio $ : {product.precio}</p>
            <p>Total: $ {product.quantity * product.precio}</p>
            <button className='text-black px-3' onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart;