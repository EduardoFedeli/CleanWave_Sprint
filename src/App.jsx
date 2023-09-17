import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import StorageDemo from './Components/StorageDemo';
import ParentComponent from './Components/ParentComponent';
import { FullPage, adicionarBordaAImagens } from './Components/Styles'; 


function App() {
  return (
    <FullPage> 
      <adicionarBordaAImagens>
        <Header />
        <Body />
        <StorageDemo />
        <ParentComponent />
        <Footer />
      </adicionarBordaAImagens>
    </FullPage>
  );
}

export default App;

