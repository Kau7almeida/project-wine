import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import './index.scss'

function Company() {
    return (
        <>
            <Navbar />

            <div className="space"></div>

            <h1><span className="span-company">Viva a vxpêriencia do vinho conosco. Brinde a cada momento com a </span>Wine Experience!</h1>
            
            <main className="container company">
                <h3>Sobre a Wine Experience</h3>
                <p>Na Wine Experience, acreditamos que cada garrafa de vinho é uma viagem pelo mundo, uma celebração de culturas e uma experiência sensorial única. Fundada com paixão e expertise, nossa missão é trazer o melhor do universo dos vinhos para sua mesa.</p>

                <h3>Nossa Missão</h3>
                <p>Oferecer vinhos de alta qualidade, selecionados por especialistas, e proporcionar uma experiência de compra memorável, com serviço excepcional e entrega eficiente.</p>

                <h3>Nossa Visão</h3>
                <p>Ser a referência em e-commerce de vinhos, promovendo a cultura do vinho e proporcionando experiências inesquecíveis a nossos clientes.</p>

                <h3>Nosso Time</h3>
                <p>A Wine Experience é composta por um time de especialistas e apaixonados por vinhos, dedicados a selecionar os melhores rótulos e a oferecer um atendimento personalizado. Nossa equipe está sempre pronta para ajudar você a encontrar o vinho perfeito para cada ocasião.</p>

                <h3>Nossos Valores</h3>
                <div className="valores">

                    <div className="valor">
                        <span>Excelência</span>
                        <p>Compromisso com a qualidade em cada rótulo, serviço e atendimento.</p>
                    </div>

                    <div className="valor">
                        <span>Excelência</span>
                        <p>Compromisso com a qualidade em cada rótulo, serviço e atendimento.</p>
                    </div>

                    <div className="valor">
                        <span>Excelência</span>
                        <p>Compromisso com a qualidade em cada rótulo, serviço e atendimento.</p>
                    </div>

                    <div className="valor">
                        <span>Excelência</span>
                        <p>Compromisso com a qualidade em cada rótulo, serviço e atendimento.</p>
                    </div>

                </div>
            </main>
        </>
    );
}

export default Company;