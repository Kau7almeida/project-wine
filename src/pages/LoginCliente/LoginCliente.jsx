import React from 'react';
import { useState } from "react";
import './index.scss'
import { Link } from 'react-router-dom';
import Header from '../../Components/CarrinhoDeCompras/Header';
import Content from '../../Components/LoginCliente/Content';
import ContentCadastroCliente from '../../Components/CadastroCliente/ContentCadastroCliente';


function LoginCliente() {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className='container-logincliente'>
                <Content titulo="Cliente Wine"/>
            </div>


        </>


    )
}

export default LoginCliente;