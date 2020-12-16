import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import burgerLogo from '../../../assets/images/burger-logo.png';

import './BurgerCard.scss';

const BurgerCard = (props) => {
    return (
        <div className="BurgerCard" onClick={() => props.openPurchaseBurger(props.name)}>
            {/* <FontAwesomeIcon style={{fontSize: '10rem', margin: '2rem 0', color: '#ffca40'}} icon={faHamburger} /> */}
            <img style={{width: '60%', margin: '2rem 0'}} src={burgerLogo} alt="myBurger" />
            <h4 className="name">{props.name}</h4>
            <span className="grams">{props.grams}</span>
            <strong className="price">$ {props.price}</strong>
        </div>
    );
};

export default BurgerCard;