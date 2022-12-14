import React from 'react';
import {Routes, Route} from "react-router-dom"
import NavBar from './componentes/nav';
import './index.css';
import ItemDetailContainer from './componentes/itemdetailconteiner';
import BodyConNav from './componentes/itemlistcontainer';
import Cart from './componentes/cart';
import Checkout from './componentes/Checkout';
import CartProvider from './CartContext';
 export const CartContext = React.createContext("")

 function App() {
  return(
    <>
  <div>

<div className="container-fluid">
<div className="row flex-nowrap">

<CartProvider>

<NavBar/>

<Routes>
  
<Route path='/' element={<BodyConNav/> }/>
<Route path='/productos' element={<BodyConNav/> }/>
<Route path='/productos/:categoriaId' element={<BodyConNav/> }/>
<Route path='/detalle/:id' element={  <ItemDetailContainer/> }/>
<Route path= "/cart" element= {<Cart/>} />
<Route path="/chekout" element={<Checkout />} />

</Routes>
</CartProvider>

  </div>

  </div>

  </div>
  </>
  )
 }

export default App;