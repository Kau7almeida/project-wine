import React from "react";
import { useState } from "react";
import './index.scss'
import { Link } from 'react-router-dom';
import Header from "../../Components/CarrinhoDeCompras/Header";
import Content from "../../Components/LoginCliente/Content";

function LoginAdm() {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className='container-logincliente'>
                <Content titulo ="Administrador Wine"/>
            </div>
        </>
    );
}

export default LoginAdm