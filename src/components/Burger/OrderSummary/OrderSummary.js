import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux'

import Button from '../../UI/Buttton/Button';

import './OrderSummary.scss';

class OrderSummary extends Component {
    // This could be a pure component
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li className="orderIngItem" key={igKey}>
                        <span>
                            {igKey}:
                        </span>
                        <strong> {this.props.ingredients[igKey]}</strong>
                    </li>
                );
            });
        return (
            <Aux>
                <h3 className="orderTitle">
                    <FontAwesomeIcon icon={faUtensils} />
                    <span style={{marginLeft: '1rem'}}>Your order</span>
                </h3>
                <p className="orderLegend">A delicious burger with the following ingredients:</p>
                <ul className="orderIngList">
                    {ingredientSummary}
                </ul>
                <p className="orderPrice">
                    <strong>Total Price: </strong> {this.props.price.toFixed(2)}
                </p>
                <p className="orderQuestion">Continue to checkout?</p>
                <div className="orderButtons">
                    <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                    <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
                </div>
            </Aux>
        );
    };
};

export default OrderSummary;