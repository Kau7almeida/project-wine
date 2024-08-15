import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import FormCliente from '../../Components/PerfilCliente/FormCliente';
import Informacoes from '../../Components/PerfilCliente/Informacoes';
import TituloCliente from '../../Components/PerfilCliente/TituloCliente';
import Navbar from '../../Components/Navbar/Navbar';


function PerfilCliente() {
    return (
        <>
            <header>
                <Navbar />
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