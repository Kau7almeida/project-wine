import React from "react";

function TableRow({data, removerItem, atualizarQuantidade}) {
    return (
        <>


            <tr>
                <td>
                    <div className="content-produto">
                        <img src="https://images.divinho.com.br/media/catalog/product/cache/b7d320e39333d0f7a197a4ddb51399f4/v/i/vinho_ch_teau_margaux_grand_cru_class_2006.png" alt="imagem garrafa de vinho"></img>
                        <div className="info-produto">
                            <div className="nome">
                                <span>{data.name}</span>
                                <span>{data.subname}</span>
                            </div>
                            <div className="litragem">{data.litragem}</div>
                        </div>

                    </div>
                </td>
                <td>
                    <div className="quantidade">
                        <button onClick={() => {atualizarQuantidade(data, 'remove')}}><i className='bx bx-minus'></i></button>
                        <span>{data.quantity}</span>
                        <button onClick={() => {atualizarQuantidade(data, 'adiciona')}}><i className='bx bx-plus'></i></button>

                    </div>
                </td>
                <td> R$ {data.price}</td>
                <td>R$ {data.price * data.quantity}</td>
                <td>
                    <button className="lixeira" onClick={() => {removerItem(data);}}><i className='bx bx-trash'></i></button>
                </td>
            </tr>


        </>
    )
}

export default TableRow