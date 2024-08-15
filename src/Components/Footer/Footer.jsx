import React from "react";
import './index.scss';

function Footer() {
    return (
        <footer>
            <div className="container" id="separacao">
                <div id="sobre">
                    <h4>Sobre a Wine</h4>
                    <div>
                        <a href="#" className="sobre">Sobre a Wine Experience</a>
                        <a href="3" className="sobre">Nossa missão</a>
                        <a href="#" className="sobre">Nossa visão</a>
                        <a href="#" className="sobre">Nosso time</a>
                        <a href="#" className="sobre">Nossos valores</a>
                    </div>
                </div>

                <div id="apps">
                    <h4>Redes sociais</h4>
                    <div className="rede">
                        <a href="#"><img src="public/img/insta.png" alt="" className="redes" /></a>
                        <a href="#"><img src="public/img/facebook.png" alt="" className="redes" /></a>
                        <a href="#"><img src="public/img/youtube.png" alt="" className="redes" /></a>
                    </div>
                </div>
            </div>

            <div className="container" id="line"></div>

            <p>2024 Wine Experience. Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;