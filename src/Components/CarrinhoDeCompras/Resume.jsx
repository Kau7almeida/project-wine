import React from "react";

function Resume({total}) {
    return(
        <div className="box">
                            <div className="resumo">
                                <span>Resumo da Compra</span>
                            </div>
                            <div className="informacoes">
                                <div><span>Subtotal</span><span>R$ {total}</span></div>
                                <div><span>Frete</span><span>Gratuito</span></div>
                                <div><button>Adicionar cupom de desconto <i className='bx bx-right-arrow-alt'></i></button></div>
                            </div>
                            <div className="total">
                                <div><span>Total</span><span>R$ {total}</span></div>

                            </div>
                        </div>
    )
}

export default Resume