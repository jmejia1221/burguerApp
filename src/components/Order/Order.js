import { faBacon, faCarrot, faCheese, faDrumstickBite, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Order.scss';

const Order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientsOutput = ingredients.map(ig => {
        return <span
            className="ingredientOrder"
            key={ig.name}>
                {ig.name === 'bacon' && <FontAwesomeIcon icon={faBacon} />}
                {ig.name === 'cheese' && <FontAwesomeIcon icon={faCheese} />}
                {ig.name === 'meat' && <FontAwesomeIcon icon={faDrumstickBite} />}
                {ig.name === 'salad' && <FontAwesomeIcon icon={faCarrot} />}
                <span className="ingredientOrderText">{ig.name} {ig.amount}</span>
            </span>
    })

    return (
        <div className="Order">
            <h4 className="OrderTitle">
                <FontAwesomeIcon icon={faHamburger} />
                <span>{props.burgerName ? props.burgerName : 'Burger'}</span>
            </h4>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default Order;