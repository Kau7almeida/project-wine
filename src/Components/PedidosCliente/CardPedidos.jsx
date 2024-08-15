import React from 'react';

// import { Container } from './styles';

function CardPedidos() {
    return (
        <>
            <div className="info-pedido">
                <div className="imagem-produto">
                    <img src="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho_ch_teau_margaux_grand_cru_class_2006.png" alt="imagem do produto comprado" />
                </div>
                <div className="nome-produto">
                    <span> Château Margaux</span>
                    <span> Grand Cru Classé 2017</span>
                    <div className="litragem">
                        <span> 750ml </span>
                    </div>
                </div>
                <div className="info-produto">
                    <span> 1un - R$ 10990,00</span>
                </div>

            </div>
    
        </>

    )
}

export default CardPedidos;