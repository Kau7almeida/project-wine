import React from 'react';

function FormCliente(dadosCliente) {
    return (
        <>
            <div className="content-formulario">
                <div className="container-campos">
                    <form className="campos">
                        <div className="dados-pessoais">
                            <h3>{dadosCliente.dados} <i className='bx bx-chevron-down'></i></h3>
                            <div className="input-formulario">
                                <input type="text" placeholder="Nome Completo" name="nome" id="nome"></input>
                            </div>
                            <div className="input-formulario">
                                <input type="email" placeholder="Endereço de email" name="email" id="email"></input>
                            </div>
                            <div className="input-formulario">
                                <input type="password" placeholder="Senha" name="senha" id="senha"></input>
                            </div>
                            <div className="input-formulario">
                                <input type="password" placeholder="Confirmar senha" name="confirmar-senha"
                                    id="confirmar-senha"></input>
                            </div>
                        </div>


                        <div className="contato">
                            <h3>Contato <i className='bx bx-chevron-down'></i></h3>
                            <div className="input-formulario">
                                <input type="tel" placeholder="Telefone" name="telefone" id="telefone"></input>
                            </div>
                            <div className="input-formulario">
                                <input type="tel" placeholder="Celular" name="celular" id="celular"></input>
                            </div>
                        </div>


                        <div className="endereco">
                            <h3>Endereço <i className='bx bx-chevron-down'></i></h3>
                            <div className="input-formulario">
                                <input type="text" placeholder="CEP" name="cep" id="cep"></input>
                            </div>
                            <div className="input-formulario">
                                <input type="text" placeholder="Logradouro" name="logradouro" id="logradouro"></input>
                            </div>
                            <div className="num">
                                <div className="input-formulario">
                                    <input type="text" placeholder="Nº" name="numero" id="numero"></input>
                                </div>
                                <div className="input-formulario">
                                    <input type="text" placeholder="Complemento" name="complemento" id="complemento"></input>
                                </div>
                            </div>
                            <div className="input-formulario">
                                <input type="text" placeholder="Bairro" name="bairro" id="bairro"></input>
                            </div>
                            <div className="city">
                                <div className="input-formulario">
                                    <input type="text" placeholder="Cidade" name="cidade" id="cidade"></input>
                                </div>
                                <div className="input-formulario">
                                    <input type="text" placeholder="Estado" name="estado" id="estado"></input>
                                </div>
                                <div className="input-formulario">
                                    <input type="text" placeholder="Pais" name="pais" id="pais"></input>
                                </div>
                            </div>
                        </div>



                    </form>
                    <div>
                        <button id="salvar-alteracoes-btn" onClick="salvaralteracoes()">Salvar Alterações</button>
                    </div>

                </div>
            </div>
        </>

    )
}

export default FormCliente;