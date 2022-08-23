import React from "react";

const nav = () => {
    return(
        <div>

<nav class="navbar navbar_style navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">JULIAN COLLI</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <ul class="navbar-nav"  >
                  <li class="li">
                  <a class="nav-link active" aria-current="page" href="#">INICIO</a>
                  </li>
                  <li class="li">
                    <a class="nav-link active" aria-current="page" href="pages/sobremi.html">SOBRE MI</a>
                  </li>
                  <li class="li">
                    <a class="nav-link active" aria-current="page" href="pages/hab.html">MIS HABILIDADES</a>
                  </li>
                  <li class="li">
                    <a class="nav-link active" aria-current="page" href="pages/contratar.html">PORQUE CONTRATARME</a>
                  </li>
                  <li class="li">
                    <a class="nav-link active" aria-current="page" href="pages/contactame.html">CONTACTAME</a>
                  </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>  

        </div>
    )
}




export default nav