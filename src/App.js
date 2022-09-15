import React from 'react';
import {Routes, Route} from "react-router-dom"

import NavBar from './componentes/nav';
import './index.css';
import ItemDetailContainer from './componentes/itemdetailconteiner';
import BodyConNav from './componentes/bodyconNav';



 function App() {
  return(
    <>
  <div>

<div className="container-fluid">
<div className="row flex-nowrap">


<NavBar/>
<Routes>
  <Route path='/body' element={<BodyConNav/>} /> 
  <Route path="/:id" element={<ItemDetailContainer/>} />
  </Routes>
  </div>
  </div>
  </div>
  </>
  )
 }

export default App;