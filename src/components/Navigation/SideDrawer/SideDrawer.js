import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

import './SideDrawer.scss';

const sideDrawer = (props) => {
    let attachedClasses = 'SideDrawer Close';
    if (props.open) {
        attachedClasses = 'SideDrawer Open';
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses} onClick={props.closed}>
                <div className="DrawerLogo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isSideDrawer isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;