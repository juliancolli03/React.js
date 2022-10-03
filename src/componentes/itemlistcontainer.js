import React, {useState, useEffect} from "react";
import ItemCounts from "./item"
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, getDoc, query, where } from 'firebase/firestore';


const Bodyy = ({texto}) => {
    const [data, setData]=useState([])

const {categoriaId} = useParams()

    useEffect(()=>{
        
        const querydb = getFirestore()
        const queryCollection = collection(querydb,"productos")
        if(categoriaId){
        const queryFilter = query(queryCollection,where("categoria", "==",categoriaId))
         getDocs(queryFilter)
        .then(res=>setData(res.docs.map(producto=>({id: producto.id, ...producto.data()}))))


         }
         else{
          getDocs(queryCollection)
          .then(res=>setData(res.docs.map(producto=>({id: producto.id, ...producto.data()}))))
              
        }
    },[categoriaId])
    return(

            
            <div className="col py-3">
              <h5 className="welcome text-center"> BIENVENIDOS </h5>
              
                <h3>HouseTec Argentina</h3>
                <p className="lead"> Bienvenidos a HouseTec Argentina, la casa de tecnologia mas importante de toda Argentina. En este sitio web vas a poder encontrar nuestros productos a los mejores precios del mercado.
                </p>
            <h3> Nuestros Productos</h3>
            <div className="Items">
            
             {texto}
            <ItemCounts data={data}/>
            </div>
            <br></br>
            <div className="margen"> </div>
            <br></br>
            <footer className="shadow-lg text-center text-white" >
  <div className="container pt-4">
    <section className="mb-4">
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://wa.me/5491169253825"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fa-brands fa-whatsapp"></i
      ></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.instagram.com/juliann_colli03/?hl=es"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-instagram"></i
      ></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/in/julian-colli-05395a231/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i
      ></a>
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://github.com/juliancolli03"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-github"></i
      ></a>
    </section>
  </div>

  <div className="text-center text-dark p-3" >
    <p>
  <span className="spann"> © </span> 2022 Diseño echo por <span className="spann"> Julian Colli </span>, todos los derechos reservados.
  </p> </div>
</footer>

          </div> 
          )
}




export default Bodyy