import React from 'react';
import NavBar from './componentes/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import ItemDetailContainer from './componentes/itemdetailconteiner';
import BodyConNav from './componentes/bodyconNav';
 function App() {
  return(
  <div>

<div className="container-fluid">
<div className="row flex-nowrap">


<NavBar/>
   <BodyConNav/>
  <ItemDetailContainer/>
  </div>
  </div>
  </div>

  )
 }

export default App;