import React from 'react';

function Body() {
  return (
    <main>
      <section className="product-section">
        <h1>Produtos</h1>
        <article className="product">
          <header>
            <h2>Nome do Produto 1</h2>
          </header>
          <p>Descrição do Produto 1...</p>
          <footer>
            <p>Preço: R$ 100,00</p>
          </footer>
        </article>

        <article className="product">
          <header>
            <h2>Nome do Produto 2</h2>
          </header>
          <p>Descrição do Produto 2...</p>
          <footer>
            <p>Preço: R$ 120,00</p>
          </footer>
        </article>

        <article className="product">
          <header>
            <h2>Nome do Produto 3</h2>
          </header>
          <p>Descrição do Produto 3...</p>
          <footer>
            <p>Preço: R$ 80,00</p>
          </footer>
        </article>
      </section>

      <div className="grid-container">
        <div className="grid-item">Item 1</div>
        <div className="grid-item">Item 2</div>
        <div className="grid-item">Item 3</div>
      </div>
    </main>
  );
}

export default Body;
