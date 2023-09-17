import React from 'react';
import Logo from './Assets/Imagens/logo sem fundo.png';

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo" className="bordered-image" />
    </footer>
  );
}

export default Footer;
