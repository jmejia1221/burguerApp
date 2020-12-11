import React from 'react';

import './BurgerCard.scss';

const BurgerCard = (props) => {
    return (
        <div className="BurgerCard" onClick={props.openPurchaseBurger}>
            <img />
            <h4 className="name">{props.name}</h4>
            <span className="grams">{props.grams}</span>
            <strong className="price">$ {props.price}</strong>
        </div>
    );
};

export default BurgerCard;