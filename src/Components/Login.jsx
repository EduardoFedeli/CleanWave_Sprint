

import React from 'react';

function Login() {
  // Para armazenar dados no localStorage
localStorage.setItem('chave', 'valor');

// Para recuperar dados do localStorage
const valor = localStorage.getItem('chave');

// Para remover dados do localStorage
localStorage.removeItem('chave');

// Para armazenar dados no sessionStorage
sessionStorage.setItem('usuario', 'nome_de_usuario');
sessionStorage.setItem('senha', 'senha_secreta');

// Para recuperar dados do sessionStorage
const usuario = sessionStorage.getItem('usuario');
const senha = sessionStorage.getItem('senha');
}

export default Login; // Certifique-se de exportar o componente como padrão


