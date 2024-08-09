import React from "react";
import Card from "../Card/Card";
import './index.scss';

function Espumantes() {
    return (
        <>

            <section className="container">
                <div id="cards-section">
                    <p>França</p>

                    <div className="cards">

                        <Card
                            image="https://images.vivino.com/thumbs/s5aXYaQiTu-V_xEYI3KXRg_pb_x600.png"
                            alternative="Espumante Dom Pérignon"
                            name="Dom Pérignon"
                            value="R$ 3.988,00"
                        />

                        <Card
                            image="https://cdn.mistral.com.br/products/35663/img_m_35663.png"
                            alternative="Espumante Champagne Bollinger La Grande Année 2014"
                            name="Champagne Bollinger La Grande Année 2014"
                            value="R$ 2.003,38"
                        />

                    </div>

                    <p>Itália</p>

                    <div className="cards">

                        <Card
                            image="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/f/e/ferrari_trento_maximum_brut.png"
                            alternative="Espumante Ferrari Trento Maximum Brut"
                            name="Ferrari Trento Maximum Brut"
                            value="R$ 466,00"
                        />

                    </div>

                </div>
            </section>
        </>
    );
}

export default Espumantes;