import React from 'react';
import MenuLink from 'components/custom/MenuLink';
import './Menu.scss';

function Menu() {
    return (
        <ul className='menu'>
            <MenuLink label="Home" to="/" activeOnlyWhenExact={true}></MenuLink>
            <MenuLink label="Product" to="/product" ></MenuLink>
            <MenuLink label="About" to="/about" ></MenuLink>
        </ul>
    );
}

export default Menu;