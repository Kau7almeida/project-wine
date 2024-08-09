import React from 'react';
import { useState } from "react";
import './index.scss'
import { Link } from 'react-router-dom';
import Header from '../../Components/CarrinhoDeCompras/Header';


function Identificacao() {
  return (
    <>
      <reader>
      <Header />
      </reader>
      <section className='container-identificacao'>
        <div className='content-identificacao'>
          <h1>Wine Experience</h1>
          <span>Identifique-se</span>

          <button className='cliente'>Cliente</button>
          <button className='administrador'>Administrador</button>

        </div>

      </section>
    </>

  );
}

export default Identificacao;