import styled from 'styled-components';


export const adicionarBordaAImagens = () => `
  img {
    border: 2px solid #000; /* Adicione seus estilos de borda personalizados aqui */
  }
`;


export const FullPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #0074cc, #3d6cb3, #003f87);
  font-weight: bold;
  font-size: 20px;
  text-align: center;

  ${adicionarBordaAImagens()} /* Aplica a função aos elementos 'img' dentro deste componente */
`;
