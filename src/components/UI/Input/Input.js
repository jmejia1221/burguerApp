import React from 'react';

import './Input.scss';

const input = (props) => {
    let inputElement = null;
    const inputClasses = ['InputElement']

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid');
    }

    switch (props.inputtype) {
        case ('input') :
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea') :
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select') :
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map((option, i) => {
                        return (
                            <option key={i} value={option.value}>
                                {option.displayValue}
                            </option>);
                    })}
                </select>
            );
            break;
        default :
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} />
            break;
    }
    return (
        <div className="Input">
            { props.label && <label className="Label">{props.label}</label> }
            {inputElement}
        </div>
    )
};

export default input;