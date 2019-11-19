/* eslint-disable jsx-quotes */
import React from 'react';
import '../assets/styles/components/Menu.scss';
import menu from '../assets/static/menu.png';
import foto from '../assets/static/otroyo.jpg';

const Menu = () => {
  return (
    <div className="menu-container">
      <img className="menu--img" src={menu} alt="menu" />

      <div className="menu-desplegable">
        <img src={foto} alt="mi foto" className="menu-desplegable--img" />
        <ul>
          <li>Sobre mi</li>
          <li>Mis experimentos</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
