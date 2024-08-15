import React, { useState } from "react";
import './index.scss'

import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import LpBlogs from "../../Components/LpBlogs/LpBlogs.jsx";

function Blog() {

    const [openModal, setOpenModal] = useState (false)

    return (
        <>
            <Navbar />

            <div className="space-blog"></div>

            <section className="section-blog">
                <h1 className="h1-blog">Bem Vindo ao Blog Wine Experience!</h1>
                <p className="paragrafo-one-blog">Descubra o fascinante universo dos vinhos em nosso blog. Aqui, apaixonados por vinho encontram um espaço repleto de informações, dicas e curiosidades para aprimorar cada gole.</p>
            </section>

            <main className="main-blog">
                <div className="image-blog"></div>

                <div className="container">
                        <section className="blog">
                            
                            <h4>Dicas de Harmonização</h4>
                            <p className="text">Aprenda como combinar vinhos com pratos diversos e torne suas refeições ainda mais especiais. </p>

                            <p>Aprenda a elevar suas refeições a um novo patamar com nossas dicas de harmonização. Descubra como escolher o vinho perfeito para complementar desde pratos sofisticados até jantares casuais. Com as orientações dos nossos especialistas, você nunca mais terá dúvidas sobre qual vinho servir em cada ocasião.</p>

                            <button onClick={() => setOpenModal(true)} >
                                Especialistas
                            </button>

                            <LpBlogs isOpen={openModal} onClose={() => setOpenModal(false)}/>

                            <br />

                            <h4>Viagens e Vinícolas</h4>
                            <p className="text">Conheça as melhores regiões vinícolas do mundo e planeje sua próxima viagem enogastronômica.</p>

                            <p>Viaje conosco pelas mais famosas regiões vinícolas e conheça as histórias e tradições que tornam cada vinho único. Explore vinícolas renomadas, descubra destinos emergentes e planeje sua próxima aventura enogastronômica com nossas dicas de viagem.</p>

                            <button onClick={() => setOpenModal(true)}>
                                Especialistas
                            </button>

                            <LpBlogs isOpen={openModal} onClose={() => setOpenModal(false)}/>

                            <br />

                            <h4>Histórias e Curiosidades</h4>
                            <p className="text">Mergulhe nas histórias por trás dos rótulos e explore as curiosidades do universo do vinho.</p>

                            <p>Mergulhe nas fascinantes histórias por trás dos rótulos e explore curiosidades que só o universo do vinho pode oferecer. Desde a origem das uvas até os métodos de produção, nosso blog revela segredos e fatos intrigantes para enriquecer seu conhecimento e amor pelo vinho.</p>

                            <button onClick={() => setOpenModal(true)}>
                                Especialistas
                            </button>

                            <LpBlogs isOpen={openModal} onClose={() => setOpenModal(false)}/>

                            <br />

                            <h4>Guia do Vinho</h4>
                            <p className="text">Receba orientações dos nossos especialistas sobre como escolher, armazenar e servir vinhos da melhor maneira.</p>

                            <p>Transforme-se em um verdadeiro conhecedor de vinhos com nosso guia completo. Receba orientações detalhadas sobre como escolher vinhos de qualidade, armazená-los corretamente e servir como um sommelier. Nossos especialistas compartilham dicas práticas para que você aproveite ao máximo cada garrafa.</p>

                            <button onClick={() => setOpenModal(true)}>
                                Especialistas
                            </button>

                            <LpBlogs isOpen={openModal} onClose={() => setOpenModal(false)}/>

                            <br />

                            <h4>Eventos e Degustações</h4>
                            <p className="text">Fique por dentro dos eventos exclusivos e das degustações promovidas pela Wine Experience.</p>

                            <p>Fique por dentro dos eventos exclusivos e das degustações promovidas pela Wine Experience. Conheça novas tendências, experimente rótulos excepcionais e compartilhe momentos únicos com outros entusiastas do vinho. Inscreva-se e não perca a chance de participar das nossas experiências enogastronômicas.</p>

                            <button onClick={() => setOpenModal(true)}>
                                Especialistas
                            </button>

                            <LpBlogs isOpen={openModal} onClose={() => setOpenModal(false)}/>
                        
                        </section>
                </div>
            </main>

            <div className="space-dois-blog"></div>

            <Footer />

        </>
    );
}

export default Blog;