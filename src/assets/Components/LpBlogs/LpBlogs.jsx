import { useState } from 'react';
import './index.scss';

function LpBlogs({ isOpen, onClose }) {

    if (isOpen) {
        
        return (
            <div className='fundo'>
                <div className="container" id='btn-lp'>
            <button onClick={onClose}>Voltar</button>
                    </div>

                <div className="div-lp-blogs" >

                    <div className="container">
                        <h5><span>A Arte da Harmonização:</span> Combine Vinhos e Pratos como um Especialista </h5>



                        <p>Harmonizar vinho e comida é uma arte que eleva a experiência gastronômica a outro nível. O objetivo é criar uma sinergia onde os sabores do vinho e da comida se complementem e realcem mutuamente. Algumas dicas importantes incluem:</p>

                        <br />

                        <span>Correspondência de Intensidade:</span>
                        <p>Pratos leves combinam melhor com vinhos leves, enquanto pratos mais robustos pedem vinhos mais encorpados.</p>

                        <br />

                        <span>Contraste e Complemento:</span>
                        <p>Contrastar sabores, como combinar um vinho doce com um prato salgado, pode ser surpreendente e delicioso. Já a complementação de sabores semelhantes, como um vinho frutado com um prato de frutas, também é uma técnica eficaz.</p>

                        <br />

                        <span>Considerar os Ingredientes Principais:</span>
                        <p>A carne, o peixe ou o vegetal principal do prato é crucial na escolha do vinho. Por exemplo, carnes vermelhas geralmente combinam bem com vinhos tintos encorpados, enquanto peixes e frutos do mar são melhor acompanhados por vinhos brancos leves.</p>

                        <br />

                        <span>Equilíbrio de Acidez:</span>
                        <p>Vinhos com alta acidez combinam bem com pratos ácidos, ajudando a limpar o paladar e realçar os sabores.</p>

                        <br />

                        <span>Doçura e Sobremesas:</span>
                        <p>Ao harmonizar vinhos com sobremesas, escolha vinhos que sejam tão doces quanto ou mais doces que a sobremesa para evitar que o vinho pareça amargo.</p>
                    </div>

                </div>
            </div>
        );
    }

    return null

}

export default LpBlogs;