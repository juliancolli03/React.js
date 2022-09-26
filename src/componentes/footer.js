import React from "react";


const Footer =  () =>{
    return(
      <div>

<footer class="text-center text-white" >
  <div class="container pt-4">
    <section class="mb-4">
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://wa.me/5491169253825"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fa-brands fa-whatsapp"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.instagram.com/juliann_colli03/?hl=es"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/in/julian-colli-05395a231/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://github.com/juliancolli03"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    </section>
  </div>

  <div class="text-center text-dark p-3" >
    © 2022 Copyright:
     Julian Colli
  </div>
</footer>

      </div>
    )
}


export default Footer