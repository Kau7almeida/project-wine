import React from "react";

function Header(){
    return(
        <nav className="cabecalho">
        <div className="menu">
            <div className="logo">
                <img src="src/assets/imagens/logo.png" alt="logo da loja"></img>
            </div>

            <div className="informacao">

                <button className="home">Home</button>
                <button className="blog">Blog</button>
                <button className="company">Company</button>

            </div>

            <div className="navegacao">
                <button><i className='bx bx-notepad'></i></button>
                <button><i className='bx bx-cart'></i></button>
                <button><i className='bx bx-user'></i></button>
            </div>
        </div>
    </nav>

    )
}

export default Header