import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSignInAlt, faHamburger, faWallet } from '@fortawesome/free-solid-svg-icons';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.scss';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        {/* We can pass a param linke this active={true} but for boolean just active */}
        { props.isSideDrawer && (
            <>
                <NavigationItem link="/" exact>
                    <FontAwesomeIcon className="m-right-8" icon={faHamburger} />
                    Burgers
                </NavigationItem>
                <NavigationItem link="/orders">
                    <FontAwesomeIcon className="m-right-8" icon={faWallet} />
                    Orders
                </NavigationItem>
            </>
        ) }
        { !props.isAuthenticated ?
            <NavigationItem link="/auth">
                <FontAwesomeIcon className="m-right-8" icon={faSignInAlt} />
                Authenticate
            </NavigationItem> :
            <NavigationItem link="/logout">
                <FontAwesomeIcon className="m-right-8" icon={faSignOutAlt} />
                Logout
            </NavigationItem> }
    </ul>
);

export default navigationItems;