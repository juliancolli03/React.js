import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from "../CartContext";
import ItemCart from './itemcart';
const Cart = () => {
   const { cart, totalPrice } = useCartContext();

   if (cart.length === 0) {
     return(
       <div className='carrot'>
         <p>No hay elementos en el carrito </p>
         <Link className='' to='/'> Hacer compras</Link>
       </div>
     )
   }

   return (
     <>
     <div className='col py-3'>
      <div className='Itemsss'>
        {
        cart.map(product => <ItemCart key={product.id} product={product} />) 
       }
       
        <div>
         <p className='h3'>
         Total: $ {totalPrice()}
       </p>
       <Link className='btn btn-primary' to='/'>Volver a la tienda</Link>
       <br></br>
       <br></br>
       <Link className='btn comprar' to="/chekout">Terminar compra</Link>
       </div>
       </div>
       
       </div>
      
     </>
   )
}



export default Cart;