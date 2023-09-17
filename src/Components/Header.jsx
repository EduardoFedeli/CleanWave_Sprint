import React from 'react';
import Logo from './Assets/Imagens/logo sem fundo.png';

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo" className="bordered-image" />
    </header>
  );
}

export default Header;
