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
                                <img src={vasoImage} alt="Vaso" style={{ width: '200px', height: '200px' }} />
          
                            </header>
          
                            <p>Este vaso utiliza sensores para monitorar o nível de umidade do solo e automaticamente irriga suas plantas quando necessário, garantindo que elas recebam a quantidade certa de água.</p>
          
                            <footer>
                                <p>Preço: R$ 100,00</p>
                            </footer>
        
                        </article>
                    
                    </div>
                    
                    <div className="grid-item">Item 2    
                        
                        <article className="product">
          
                            <header>
            
                                <h2>Vaso Inteligente Design</h2>
                                <img src={vasoImage2} alt="Vaso" style={{ width: '200px', height: '200px' }} />
          
                             </header>
          
                            <p>Esse vaso permite que você controle o cuidado das suas plantas por meio de um aplicativo móvel, oferecendo informações em tempo real sobre o estado das plantas, como luz solar, umidade e fertilização.</p>
          
                            <footer>
                                <p>Preço: R$ 120,00</p>
                            </footer>
                
        
                        </article>
                    
                    </div>
                    
                    <div className="grid-item">Item 3   
                        
                        <article className="product">
          
                            <header>
            
                                <h2>Vaso Inteligente Econômico</h2>
                                <img src={vasoImage3} alt="Vaso" style={{ width: '200px', height: '200px' }} />

                            </header>
          
                            <p>Este vaso utiliza tecnologia avançada para acelerar o crescimento das plantas, proporcionando condições ideais de luz, umidade e temperatura, resultando em plantas mais saudáveis e exuberantes em menos tempo.</p>
          
                            <footer>
                                <p>Preço: R$ 80,00</p>
                            </footer>
        
                        </article>
                    
                    </div>
            
            </section>
      </div>


        <video controls>
            <source src={videoSource} type="video/mp4" style={{ width: '200px', height: '200px' }} />""
            Seu navegador não suporta o elemento de vídeo.
        </video>
    
    </main>
  );
}

export default Body;
