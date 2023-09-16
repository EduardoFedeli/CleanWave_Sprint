import React from 'react';

function ChildComponent({ message }) {
  return (
    <div>
      <h3>Componente Filho</h3>
      <p>Mensagem recebida do componente pai: {message}</p>
    </div>
  );
}

export default ChildComponent;
