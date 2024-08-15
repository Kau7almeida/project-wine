import React from "react";
import { useState } from "react";
import './index.scss'
import { Link } from 'react-router-dom';
import Content from "../../Components/LoginCliente/Content";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function LoginAdm() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className='container-logincliente sem-barra'>
                <Content titulo ="Administrador Wine"/>
            </div>
            <Footer />
        </>
    );
}

export default LoginAdm