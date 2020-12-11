import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

import './SidePanel.scss';

class SidePanel extends Component {
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.sidePanelClosed} />
                <span className="panelLine"
                    style={{
                        transform: this.props.show ? 'translateX(0)' : 'translateX(100vw)',
                        opacity: this.props.show ? '1' : '0',
                        visibility: 'visible'
                    }}></span>
                <div
                    className="SidePanel"
                    style={{
                        transform: this.props.show ? 'translateX(0)' : 'translateX(100vw)',
                        opacity: this.props.show ? '1' : '0',
                        visibility: 'visible'
                    }}>
                    {this.props.children}
                </div>
            </Aux>

        );
    }
};

export default SidePanel;