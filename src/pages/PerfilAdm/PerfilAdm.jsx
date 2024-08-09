import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
import Header from '../../Components/CarrinhoDeCompras/Header';
import FormCliente from '../../Components/PerfilCliente/FormCliente';
import Informacoes from '../../Components/PerfilCliente/Informacoes';
import TituloCliente from '../../Components/PerfilCliente/TituloCliente';

function PerfilAdm() {
    return (
        <>
            <header>
                <Header />
            </header>

            <div className='titulo'>
                <TituloCliente titulo = "Perfil do Administrador"/>
            </div>


            <main id="container-formulario">
                <FormCliente dados = "Dados da loja"/>
                <Informacoes nome = "Nome da Loja" email = "emaildaloja@gmail.com"/>
            </main>
        </>
    );

}

export default PerfilAdm