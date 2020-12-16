import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faWallet } from '@fortawesome/free-solid-svg-icons';

import './AsideNavigation.scss';

const AsideNavigation = (props) => {
    const navItems = [
        {
            itemName: 'Burgers',
            url: '/',
            exact: true,
            isAuth: true,
            icon: faHamburger
        },
        {
            itemName: 'Orders',
            url: '/orders',
            exact: false,
            isAuth: props.isAuthenticated,
            icon: faWallet
        }
    ];

    let navItemsMapped = navItems.map((item, i) => (
        item.isAuth &&
        <li key={i} className="AsideNavigationItem">
            <NavLink to={item.url} exact={item.exact}>
                { item.icon && 
                    <FontAwesomeIcon className="m-right-8" icon={item.icon} />
                } 
                { item.itemName }
            </NavLink>
        </li>
    ));

    return (
        <div className="AsideNavigationContent">
            <nav className="AsideNavigationNav">
                <ul>
                    {navItemsMapped}
                </ul>
            </nav>
        </div>
    );
}

export default AsideNavigation;