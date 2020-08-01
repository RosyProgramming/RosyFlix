import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Emoji from 'react-emoji-render';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <img className="Logo" src={Logo} alt="RosyFlix logo" />
      {' '}
      {' '}
      {' '}
      <Emoji text=" ❤️ " />
      {' '}
      {' '}
      {' '}
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
