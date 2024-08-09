import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import Header from '../../Components/CarrinhoDeCompras/Header';
import FormCliente from '../../Components/PerfilCliente/FormCliente';
import Informacoes from '../../Components/PerfilCliente/Informacoes';
import TituloCliente from '../../Components/PerfilCliente/TituloCliente';


function PerfilCliente() {
    return (
        <>
            <header>
                <Header />
            </header>

            <div className='titulo'>
                <TituloCliente titulo = "Perfil do Cliente" />
            </div>


            <main id="container-formulario">
                <FormCliente dados = "Dados Pessoais" />    
                <Informacoes nome = "Seu nome" email = "seuemail@gmail.com" />              
            </main>
        </>

    )
}

export default PerfilCliente;