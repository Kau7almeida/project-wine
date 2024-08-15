import React from "react";
import './index.scss'
import { Link } from 'react-router-dom';
import Navbar from "../../Components/Navbar/Navbar";
import TableRow from "../../Components/CarrinhoDeCompras/TableRow";
import CardPedidos from "../../Components/PedidosCliente/CardPedidos";
import Footer from "../../Components/Footer/Footer";

function PedidosCliente() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <div className="titulo-pedidos">
                <h1 className="meus-pedidos"> Meus Pedidos</h1>
            </div>

            <main className="main-pedidos">

                <div className="pedido1">
                    <div className="card-pedido">
                        <div className="card-titulo">
                            <h3>30 de abril de 2024 | R$ 21980,00</h3>
                        </div>
                        <div className="numero-pedido">
                            <p>Pedido 24513584</p>
                        </div>
                        <CardPedidos />
                    </div>
                    <div className="card-pedido">
                        <CardPedidos />
                    </div>
                </div>

                <div className="pedido2">
                    <div className="card-pedido">
                        <div className="card-titulo">
                            <h3>30 de abril de 2024 | R$ 21980,00</h3>
                        </div>
                        <div className="numero-pedido">
                            <p>Pedido 24513584</p>
                        </div>
                        <CardPedidos />
                    </div>

                    <div className="card-pedido">
                        <CardPedidos />

                    </div>
                </div>

                
            </main >
            <Footer />            


        </>
    );
}

export default PedidosCliente;
