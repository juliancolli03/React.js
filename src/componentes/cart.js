import React from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../CartContext";
import ItemCart from './itemcart';
const Cart = () => {
  // const { cart, totalPrice } = useCartContext();

  // if (cart.length === 0) {
  //   return(
  //     <div className='text-center'>
  //       <p>No hay elementos en el carrito</p>
  //       <Link className='' to='/'>Hacer compras</Link>
  //     </div>
  //   )
  // }

  // return (
  //   <>
  //     {
  //      cart.map(product => <ItemCart key={product.id} product={product} />) 
  //     }
  //     <div className='text-center'>
  //       <p className='h3'>
  //       Total: $ {totalPrice()}
  //     </p>
  //     <Link className='' to='/'>Seguir comprando</Link>
  //     </div>
      
  //   </>
  // )

  const { cart, totalPrice, deleteAll, totalProducts } = useCartContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const order = {
      buyer: {
        name: name,
        email: email,
        phone: phone,
        address: address 
      },
      items: cart.map(product => ({id: product.id, titulo: product.titulo, precio: product.precio, cantidad: product.cantidad})),
      date: new Date(),
      total: totalPrice(),
  }

  const handleClick = ()=> {
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order)
      .then(({ id }) => (
        alert(`
        Id de compra Nº ${ id }
        Fecha: ${order.date}
        Nombre: ${order.buyer.name}
        Email: ${order.buyer.email}
        Teléfono: ${order.buyer.phone}
        Dirección: ${order.buyer.address}
        Items: ${totalProducts()}
        Total: $${order.total}
        ¡Muchas gracias por confiar en nosotros!`)))
  }

  if (cart.length === 0) {
    return(
      <div className='text-center'>
        <p>No hay elementos en el carrito</p>
        <Link className='btn btn-dark text-white rounded-pill' to='/'>Hacer compras</Link>
      </div>
    )
  }

  return (
    <>
      <div>
        {
        cart.map(product => <ItemCart key={product.id} product={product} />) 
        }
        <div className='text-center'>
          <p className='h3'>
          Total: $ {totalPrice()}
        </p>
        </div>
      </div>
      <br />
      <div>
        <input type="text" placeholder='Nombre' value={name} onInput={(e) => setName(e.target.value)}/><br />
        <input type="text" placeholder='Email'value={email} onInput={(e) => setEmail(e.target.value)}/><br />
        <input type="text" placeholder='Teléfono'value={phone} onInput={(e) => setPhone(e.target.value)}/><br />
        <input type="text" placeholder='Dirección'value={address} onInput={(e) => setAddress(e.target.value)}/><br />
        <button className='btn btn-dark border text-white rounded-pill' onClick={handleClick}>Comprar</button>
        <Link className='btn btn-dark text-white rounded-pill' to='/'>Seguir comprando</Link>
      </div>
      
    </>
  )
}



export default Cart;