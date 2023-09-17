import React, { useState, useEffect } from 'react';

function StorageDemo() {
  const [count, setCount] = useState(0);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const storedCount = localStorage.getItem('contador');
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }

    const storedUsuario = sessionStorage.getItem('usuario');
    const storedSenha = sessionStorage.getItem('senha');
    if (storedUsuario && storedSenha) {
      setUsuario(storedUsuario);
      setSenha(storedSenha);
    }
  }, []);

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('contador', newCount.toString());
  };

  const salvarCredenciais = () => {
    sessionStorage.setItem('usuario', usuario);
    sessionStorage.setItem('senha', senha);
    setMensagem('Credenciais salvas com sucesso!');
  };

  return (
    <div>
      
      <p>Carrinho: {count}</p>
      <button onClick={incrementCount}>Adcionar</button>

      <h3>Armazenamento de Credenciais:</h3>
      <input
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={salvarCredenciais}>Salvar Credenciais</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default StorageDemo;
