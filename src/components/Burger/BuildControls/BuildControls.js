import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import './BuildControls.scss';

const controls = [
    { label: 'Salada', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className="BuildControls">
        <p className="BuildControlsPrice">Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                removed={() => props.ingredientRemoved(ctrl.type)}
                added={() => props.ingredientAdded(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                key={ctrl.label}
                label={ctrl.label} />
        ))}
        <button
            disabled={!props.purchasable}
            className="OrderButton"
            onClick={props.ordered}>
            {props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
        </button>
    </div>
);

export default buildControls;