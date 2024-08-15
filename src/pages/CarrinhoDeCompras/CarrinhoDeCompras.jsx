import React, { useEffect } from "react";
import { useState } from "react";
import './index.scss'
import TableRow from "../../Components/CarrinhoDeCompras/TableRow";
import Title from "../../Components/CarrinhoDeCompras/Title";
import Resume from "../../Components/CarrinhoDeCompras/Resume";
import { Link } from "react-router-dom";
import { api } from "../../Provedor";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";



function CarrinhoDeCompras() {
    const [cart, setCart] = useState([]);

    const produto = {
        name: 'Château Margaux',
        subname: 'Grand Cru Classé 2017',
        litragem: '750ml',
        price: 10990.00,
        quantity: 1
    };

    const fetchData = () => {
        api.get('/carrinho').then((response) => setCart(response.data))
    }

    useEffect(() => {
        fetchData();
    }, []);

    const adicionarItem = () => {

        api.post('/carrinho', produto).then(response => {
            console.log(response);
            fetchData(); 
        });
    };
    
    
        const removerItem = (item) => {
            api.delete(`/carrinho/${item._id}`).then((response) => {
                console.log(response);
                fetchData();
            });
        };
    
        const atualizarQuantidade = (item, action) => {
            let novaQuantidade = item.quantity;

            if(action === 'remove'){
                if(novaQuantidade === 1){
                    return;
                }
                novaQuantidade -= 1;
            }
            if(action === 'adiciona'){
                novaQuantidade += 1;
            }

            const newData = {...item, quantity: novaQuantidade};        
            delete newData._id;

            api.put(`/carrinho/${item._id}`, newData).then((response) => {
                console.log({ response });
                fetchData();
            })
        };

        const valorTotal = () => {
            let sum = 0;

            for (let item of cart){
                sum += item.price * item.quantity;
            }
            
            return sum;
        };

        const valorCarrinho = valorTotal();

        
    
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main className="main-carrinho sem-barra">
                <Title titulo='Carrinho de Compras' />
                <div className="content">
                    <div className="section-itens">
                        <table id="itens">
                            <thead>
                                <tr>
                                    <th className="produto">Produto</th>
                                    <th>Quantidade</th>
                                    <th>Valor Unitário</th>
                                    <th>Valor Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (<TableRow key= {item._id}  data={item} removerItem = {removerItem} atualizarQuantidade = {atualizarQuantidade}/>))}
                                {cart.length === 0 && <><tr><td colSpan= {5} style={{textAlign: 'center'}}>Sem itens no carrinho</td></tr></>}
                            </tbody>

                        </table>
                    </div>

                    <aside>
                        <Resume total = {valorCarrinho} />
                        <button className="finalizar">Finalizar compra</button>
                        <button className="adicionar" onClick={adicionarItem}>Adicionar mais itens</button>
                    </aside>
                </div>
                
            </main>

            
            <Footer />

        </>
    );
}

export default CarrinhoDeCompras