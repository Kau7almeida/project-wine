import React from "react";
import './index.scss';


function Card(props) {
    return (
        <div className="card">
            
            <img src={props.image} alt={props.alternative}/>

            <p className="name">{props.name}</p>

            <div>

                <p className="value" >{props.value}</p>

                <button>Comprar</button>
            </div>
        </div>
    );
}

export default Card;