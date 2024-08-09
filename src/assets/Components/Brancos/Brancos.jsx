import React from "react";
import './index.scss';
import Card from "../Card/Card";

function Brancos() {

    return (
        <>

            <section className="container">
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

                    <p>Alemanha</p>

                    <div className="cards">

                        <Card
                            image="https://cdn.mistral.com.br/products/37263/img_m_37263.png"
                            alternative="Vinho Joh. Jos. Prüm Wehlener Sonnenuhr Spätlese 2021"
                            name="Joh. Jos. Prüm Wehlener Sonnenuhr Spätlese 2021"
                            value="R$ 803,07"
                        />

                    </div>

                    <p>Itália</p>

                    <div className="cards">

                    <Card
                            image="https://cdn.mistral.com.br/products/36662/img_m_36662.png"
                            alternative="Vinho Gaja Gaia & Rey Chardonnay 2020"
                            name="Gaja Gaia & Rey Chardonnay 2020"
                            value="R$ 3.443,63"
                        />

                    </div>

                </div>
            </section>
        </>
    );
}

export default Brancos;