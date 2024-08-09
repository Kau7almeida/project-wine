import React from 'react';

function Informacoes(dadosInfo) {
    return (
        <>
            <div className="apresenta-info">
                <div className="content-apresenta-info">
                    <div className="icone">
                        <p><i className='bx bx-user'></i></p>
                    </div>
                    <div className="info">
                        <p className="seu-nome">{dadosInfo.nome}</p>
                        <p className="seu-email">{dadosInfo.email}</p>
                    </div>


                </div>

                <button id="sair" onClick="sair()">Sair</button>
            </div>

        </>

    )
}

export default Informacoes;