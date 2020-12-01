import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import './Layout.scss';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    SideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            };
        });
    }

    render(props) {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.SideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler} />
                <main className='Content'>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token
    };
};

export default connect(mapStateToProps)(Layout);