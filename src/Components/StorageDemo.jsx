import React, { useState, useEffect } from 'react';

function StorageDemo() {
  const [count, setCount] = useState(0);

  // Recuperar o valor do localStorage ao carregar o componente
  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }
  }, []);

  // Atualizar o valor do contador e salvar no localStorage
  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count', newCount.toString());
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
}

export default StorageDemo;
