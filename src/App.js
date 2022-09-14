import React from 'react';
import NavBar from './componentes/nav';
import './index.css';
import ItemDetailContainer from './componentes/itemdetailconteiner';
import BodyConNav from './componentes/bodyconNav';
import {Routes, Route} from "react-router-dom"



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