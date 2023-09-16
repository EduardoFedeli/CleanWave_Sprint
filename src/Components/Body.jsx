import React from 'react';
import vasoImage from './Assets/Imagens/vasosmart.jpg';
import vasoImage2 from './Assets/Imagens/Vaso2.jpg';
import vasoImage3 from './Assets/Imagens/vaso3.jpg';
import videoSource from './Assets/videos/video.mp4';


function Body() {
  return (
    <main>
      
      
      <div className="grid-container">
            <section className="product-section">
                    <h1>Produtos</h1>
                    
                    
                    <div className="grid-item">Item 1
                        
                        <article className="product">
          
                            <header>
            
                                <h2>Vaso Smart</h2>
                                <img src={vasoImage} alt="Vaso" style={{ width: '300px', height: '300px' }} />
          
                            </header>
          
                            <p>Descrição do Produto 1...</p>
          
                            <footer>
                                <p>Preço: R$ 100,00</p>
                            </footer>
        
                        </article>
                    
                    </div>
                    
                    <div className="grid-item">Item 2    
                        
                        <article className="product">
          
                            <header>
            
                                <h2>Nome do Produto 2</h2>
                                <img src={vasoImage2} alt="Vaso" style={{ width: '300px', height: '300px' }} />
          
                             </header>
          
                            <p>Descrição do Produto 2...</p>
          
                            <footer>
                                <p>Preço: R$ 120,00</p>
                            </footer>
                
        
                        </article>
                    
                    </div>
                    
                    <div className="grid-item">Item 3   
                        
                        <article className="product">
          
                            <header>
            
                                <h2>Nome do Produto 3</h2>
                                <img src={vasoImage3} alt="Vaso" style={{ width: '300px', height: '300px' }} />

                            </header>
          
                            <p>Descrição do Produto 3...</p>
          
                            <footer>
                                <p>Preço: R$ 80,00</p>
                            </footer>
        
                        </article>
                    
                    </div>
            
            </section>
      </div>


        <video controls>
            <source src={videoSource} type="video/mp4" style={{ width: '350px', height: '200px' }} />""
            Seu navegador não suporta o elemento de vídeo.
        </video>
    
    </main>
  );
}

export default Body;
