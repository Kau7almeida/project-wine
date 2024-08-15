import React from 'react';
import { useState } from "react";
import './index.scss'
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';


function Identificacao() {
  return (
    <>
      <reader>
      <Navbar />
      </reader>
      <main className='container-identificacao sem-barra'>
        <div className='content-identificacao'>
          <h1>Wine Experience</h1>
          <span>Identifique-se</span>

          <Link to={"/LoginCliente"}><button className='cliente'>Cliente</button></Link>
          <Link to={"/LoginAdm"}><button className='administrador'>Administrador</button></Link>

        </div>

      </main>

      <Footer />
    </>

  );
}

export default Identificacao;