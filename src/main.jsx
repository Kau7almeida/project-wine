import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { useForm } from 'react-hook-form'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { api } from './Provedor.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import CarrinhoDeCompras from './pages/CarrinhoDeCompras/CarrinhoDeCompras.jsx'
import Identificacao from './pages/Identificacao/Identificacao.jsx'
import LoginCliente from './pages/LoginCliente/LoginCliente.jsx'
import LoginAdm from './pages/LoginAdm/LoginAdm.jsx'
import PerfilCliente from './pages/PerfilCliente/PerfilCliente.jsx'
import PerfilAdm from './pages/PerfilAdm/PerfilAdm.jsx'
import CadastroCliente from './pages/CadastroCliente/CadastroCliente.jsx'
import CadastroAdm from './pages/CadastroAdm/CadastroAdm.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
<>


<BrowserRouter>
<Routes>
  <Route path= "/CadastroAdm" element={<CadastroAdm />} />
  <Route path= "/CadastroCliente" element={<CadastroCliente />} />
  <Route path= "/PerfilAdm" element={<PerfilAdm />} />
  <Route path= "/PerfilCliente" element={<PerfilCliente />} />
  <Route path= "/LoginAdm" element={<LoginAdm />} />
  <Route path= "/LoginCliente" element={<LoginCliente />} />
  <Route path = "/Identificacao" element={<Identificacao />} />
  <Route path = "/CarrinhoDeCompras" element={<CarrinhoDeCompras name = "Château Margaux" subname = "Grand Cru Classé 2017" litragem = "750ml"/>} />
  <Route path = "/LandingPage" element={<LandingPage Criticos = "Wine Enthusiast" TamanhoGarrafa = "750ml" Regiao = "Bordeaux" Produtor = "Château Margaux" TeorAlcoolico = "13%" Pais = "França" Harmonizacao = "Carnes de caça" Harmonizacao2 = "Queijos" Tipo = "Tinto" Uvas = "Cabernet Franc" Uvas2 = "Cabernet Souvignon" Uvas3 = "Merlot" Uvas4 = "Petit" Uvas5 = "Verdot" TemperaturaServico = "16° a 18°C"/>} />
</Routes>
</BrowserRouter>


</>

)


