import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './BuildControl.scss';

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button 
                className="Less"
                disabled={props.disabled}
                onClick={props.removed}>
            <FontAwesomeIcon icon={faMinus} />
        </button>
        <button
            className="More"
            onClick={props.added}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
);

export default buildControl;