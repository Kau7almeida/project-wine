import React, { useState } from "react";
import './index.scss';
import { Link } from "react-router-dom";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header>

            <nav>
                <div className="container">
                <Link className="nav-logo" to={"/home"}><img src="public/img/logo-navbar.png" alt="Logo Wine Experience" className="logo-nav" /></Link>
                    <ul className={openMenu ? 'nav-links open' : 'nav-links'}>
                        <li className="links-navbar"><Link to={"/home"}>Home</Link></li>
                        <li className="links-navbar"><Link to={"/blog"}>Blog</Link></li>
                        <li className="links-navbar"><a href="/company">Company</a></li>
                    </ul>
                    <ul>
                        <li><a href="#"><img src="public/img/pedidos-navbar.png" alt="Pedidos" className="symbols-navbar"/></a></li>
                        <li><a href="#"><img src="public/img/carrinho-navbar.png" alt="Carrinho" className="symbols-navbar"/></a></li>
                        <li><a href="#"><img src="public/img/acount-navbar.png" alt="Minha conta" className="symbols-navbar" /></a></li>
                    </ul>
                </div>

            </nav>

            <button className="menu" onClick={toggleMenu}>
                <img src="public/img/menu-hamburguer.png" alt="menu" />
            </button>

            <div id="box-menu" className={openMenu ? 'active' : ''}>

                <ul className="links-navbar">
                    <li className="links-navbar-box"><a href="#">Home</a></li>
                    <li className="links-navbar-box"><a href="#">Blog</a></li>
                    <li className="links-navbar-box"><a href="#">Company</a></li>
                </ul>

                <ul>
                    <li><a href="#"><img src="public/img/pedidos-navbar.png" alt="Pedidos" className="symbols-navbar-box" /></a></li>
                    <li><a href="#"><img src="public/img/carrinho-navbar.png" alt="Carrinho" className="symbols-navbar-box" /></a></li>
                    <li><a href="#"><img src="public/img/acount-navbar.png" alt="Minha conta" className="symbols-navbar-box" /></a></li>
                </ul>
                
            </div>

        </header>
    );
}

export default Navbar;
