

import React from 'react';

function Login() {
 
localStorage.setItem('chave', 'valor');


const valor = localStorage.getItem('chave');


localStorage.removeItem('chave');


sessionStorage.setItem('usuario', 'nome_de_usuario');
sessionStorage.setItem('senha', 'senha_secreta');


const usuario = sessionStorage.getItem('usuario');
const senha = sessionStorage.getItem('senha');
}

export default Login; 


