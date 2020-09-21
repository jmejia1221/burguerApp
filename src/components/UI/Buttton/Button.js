import React from 'react';

import './Button.scss'

const button = (props) => (
    <button
        className={`Button ${props.btnType}`}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;