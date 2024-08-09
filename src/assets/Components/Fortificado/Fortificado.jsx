import React from "react";
import Card from "../Card/Card";
import './index.scss';

function Fortificado() {
    return (
        <>

            <section className="container">
                <div id="cards-section">
                    <p>Portugal</p>

                    <div className="cards">

                        <Card
                            image="https://cdn.mistral.com.br/products/1394/img_m_1394.png"
                            alternative="Vinho Graham's 20 Years Old Tawny"
                            name="Graham's 20 Years Old Tawny"
                            value="R$ 827,73"
                        />

                        <Card
                            image="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/p/o/porto_taylo_s_tawny_10_anos.png"
                            alternative="Vinho do Porto Taylor’s Tawny 10 Anos"
                            name="Taylor’s Tawny 10 Anos"
                            value="R$ 498,00"
                        />

                    </div>

                    <p>Espanha</p>

                    <div className="cards">

                        <Card
                            image="https://images.vivino.com/thumbs/ZgaHRIsZRG6HB0t_Da8DHA_pb_x600.png"
                            alternative="Vinho González Byass"
                            name="González Byass"
                            value="R$ 326,66"
                        />

                    </div>

                </div>
            </section>
        </>
    );
}

export default Fortificado;