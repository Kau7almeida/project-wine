import React from "react";

function TableRow({data, removerItem, atualizarQuantidade}) {
    return (
        <>


            <tr>
                <td>
                    <div className="content-produto">
                        <img src="src/assets/imagens/image 1.png" alt="imagem garrafa de vinho"></img>
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