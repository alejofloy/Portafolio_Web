/* eslint-disable jsx-quotes */
import React from 'react';
import '../assets/styles/components/Menu.scss';
import menu from '../assets/static/menu.png';

const Menu = () => {
  return (
    <div className="header__header-menu">
      <img className="header__header-menu--img" src={menu} alt="menu" />
    </div>
  );
};

export default Menu;
