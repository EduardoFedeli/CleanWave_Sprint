import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [message, setMessage] = useState('Olá, mundo');

  return (
    <div>
      <h2>Componente Pai</h2>
      <p>Mensagem para o componente filho: {message}</p>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;
