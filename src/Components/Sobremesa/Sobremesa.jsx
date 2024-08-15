import React from "react";
import Card from "../Card/Card";
import './index.scss';

function Sobremesa() {
    return (
        <>

            <section className="container-sobremesa">
                <div id="cards-section">
                    <p>França</p>

                    <div className="cards">

                    <Card
                            image="https://cdn.mistral.com.br/products/36732/img_m_36732.png"
                            alternative="Vinho Château d'Yquem 2018"
                            name="Château d'Yquem 2018"
                            value="R$ 11.423,30"
                        />

                    </div>

                    <p>Hungria</p>

                    <div className="cards">
                        
                    <Card
                            image="https://cdn.mistral.com.br/products/37449/img_m_37449.png"
                            alternative="Vinho Tokaji Aszú 5 Puttonyos 1993"
                            name="Tokaji Aszú 5 Puttonyos 1993"
                            value="R$ 2.467,78"
                        />

                    </div>

                </div>
            </section>
        </>
    );
}

export default Sobremesa;