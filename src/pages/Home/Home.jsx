import React from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Tintos from "../../Components/Tintos/Tintos.jsx";
import Brancos from "../../Components/Brancos/Brancos.jsx";
import Espumantes from "../../Components/Espumantes/Espumantes.jsx";
import Sobremesa from "../../Components/Sobremesa/Sobremesa.jsx"
import Fortificado from "../../Components/Fortificado/Fortificado.jsx";
import './index.scss';

function Home() {

    const [vinhoAtual, setVinhoNovo] = useState('Tintos');

    return (
        <>

            <Navbar />

            <main className="sem-barra">

                <div className="space"></div>


                <h1 className="exelencia">Vinhos de Excelência</h1>
                <p className="paragrafo-one">Dos clássicos aos mais modernos, nossa coleção traz rótulos de renome mundial, selecionados por especialistas.</p>

                <div className="image">
                    <div className="container" id="div-one">
                        <h2>Descubra o prazer de degustar <br /> o vinho perfeito com a <br /> Wine Experience!</h2>
                    </div>
                    <div className="container" id="div-one-img">
                        <img src="./public/img/mockup.png" alt="Demostração da logo em telas de Notebook, tablet e celular" />
                    </div>
                </div>

                <section className="container-home">
                    <h3>Qual escolha mais atrai seu paladar?</h3>
                    <div id="btn-vinhos">

                        <button id={vinhoAtual === 'Tintos' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoNovo('Tintos')}>Tintos
                        </button>

                        <button id={vinhoAtual === 'Brancos' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoNovo('Brancos')}>Brancos
                        </button>

                        <button id={vinhoAtual === 'Espumantes' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoNovo('Espumantes')}>Espumantes
                        </button>

                        <button id={vinhoAtual === 'Sobremesa' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoNovo('Sobremesa')}>Sobremesa
                        </button>

                        <button id={vinhoAtual === 'Fortificado' ? 'btn-usado' : 'btn-nao-usado'} onClick={() => setVinhoNovo('Fortificado')}>Fortificado
                        </button>


                    </div>

                </section>

                {vinhoAtual === 'Tintos' && <Tintos />}
                {vinhoAtual === 'Brancos' && <Brancos />}
                {vinhoAtual === 'Espumantes' && <Espumantes />}
                {vinhoAtual === 'Sobremesa' && <Sobremesa />}
                {vinhoAtual === 'Fortificado' && <Fortificado />}

                <p className="paragrafo-dois">Junte-se à Wine Experience e brinde os melhores momentos da vida com o vinho perfeito. <span>Explore, descubra e deguste!</span></p>

                <div className="space-dois"></div>

            </main>

            <Footer />
        </>
    )
}

export default Home;