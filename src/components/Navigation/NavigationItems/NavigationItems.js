import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.scss';

const navigationItems = () => (
    <ul className="NavigationItems">
        {/* We can pass a param linke this active={true} but for boolean just active */}
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;