import React from "react";
import { useState } from "react";
import './index.scss'
import Image from "../../Components/LandingPage/Image";
import TopTitle from "../../Components/LandingPage/TopTitle";
import TopText from "../../Components/LandingPage/TopText";
import MidleTitle from "../../Components/LandingPage/MidleTitle";
import MidleText from "../../Components/LandingPage/MidleText";
import LowerTitle from "../../Components/LandingPage/LowerTitle";
import LowerText from "../../Components/LandingPage/LowerText"; 
import { Link } from "react-router-dom"


function LandingPage(dataText) {
      

    return (
        <>
            <main className="container-landing">
                <div className="content-about">
                    <div className="imagem">
                        <Image />
                    </div>

                    <div className="about-vinho">
                        <div className="history">
                            <div className="titulo">
                                <TopTitle />
                            </div>

                            <p className="texto">
                                <TopText />
                            </p>

                        </div>


                        <div className="vinificacao">
                            <MidleTitle />
                            <p className="texto">
                                <MidleText />
                            </p>

                        </div>


                        <div className="about">
                            <LowerTitle />

                            <p className="texto">
                                <LowerText />
                            </p>

                        </div>

                    </div>


                </div>

                <div className="content-caracteristicas">
                    <div className="linha1">
                        <div className="criticos">
                            <h3 className="titulo">Criticos</h3>
                            <p className="texto">{dataText.Criticos}</p>
                        </div>

                        <div className="tamanho-garrafa">
                            <h3 className="titulo">Tamanho da garrafa</h3>
                            <p className="texto">{dataText.TamanhoGarrafa}</p>
                        </div>

                        <div className="regiao">
                            <h3 className="titulo">Região</h3>
                            <p className="texto">{dataText.Regiao}</p>
                        </div>

                        <div className="produtor">
                            <h3 className="titulo">Produtor</h3>
                            <p className="texto">{dataText.Produtor}</p>
                        </div>

                        <div className="teor-alcoolico">
                            <h3 className="titulo">Teor Alcoólico</h3>
                            <p className="texto">{dataText.TeorAlcoolico}</p>
                        </div>

                    </div>
                </div>

                <div className="content-caracteristicas2">
                    <div className="linha2">
                        <div className="pais">
                            <h3 className="titulo">Pais</h3>
                            <p className="texto">{dataText.Pais}</p>
                        </div>

                        <div className="harmonizacao">
                            <h3 className="titulo">Harmonização</h3>
                            <p className="texto">
                                {dataText.Harmonizacao}
                            </p>
                            <p className="texto">
                                {dataText.Harmonizacao2}
                            </p>
                        </div>

                        <div className="tipo">
                            <h3 className="titulo">Tipo</h3>
                            <p className="texto">{dataText.Tipo}</p>
                        </div>

                        <div className="uvas">
                            <h3 className="titulo">Uvas</h3>
                            <p className="texto">
                                {dataText.Uvas}
                            </p>

                            <p className="texto">
                                {dataText.Uvas2}
                            </p>

                            <p className="texto">
                                {dataText.Uvas3}
                            </p>

                            <p className="texto">
                                {dataText.Uvas4}
                            </p>

                            <p className="texto">
                                {dataText.Uvas5}
                            </p>
                        </div>

                        <div className="temperatura-servico">
                            <h3 className="titulo">Temperatura de Serviço</h3>
                            <p className="texto">{dataText.TemperaturaServico}</p>
                        </div>

                    </div>

                    <Link to={"/CarrinhoDeCompras"}><button className="comprar" onClick="Comprar()">Comprar</button></Link>

                </div>




            </main>

        </>
    );
}

export default LandingPage