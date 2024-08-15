import React from 'react';
import { useState } from "react";
import './index.scss'
import { Link } from 'react-router-dom';
import Content from '../../Components/LoginCliente/Content';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';


function LoginCliente() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className='container-logincliente sem-barra'>
                <Content titulo="Cliente Wine"/>
            </div>
                <Footer/>
            


        </>


    );
}

export default LoginCliente;