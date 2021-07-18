import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import classNames from 'classnames';

function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li className={classNames('menu__link', { 'active': match })}>
            <Link to={to}>{label}</Link>
        </li>
    );
}

export default MenuLink;