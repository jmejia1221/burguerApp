import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.scss';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        {/* We can pass a param linke this active={true} but for boolean just active */}
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        { props.isAuthenticated &&
            <NavigationItem link="/orders">Orders</NavigationItem> }
        { !props.isAuthenticated ?
            <NavigationItem link="/auth">Authenticate</NavigationItem> :
            <NavigationItem link="/logout">Logout</NavigationItem> }
    </ul>
);

export default navigationItems;