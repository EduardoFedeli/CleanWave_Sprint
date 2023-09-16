import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import StorageDemo from './Components/StorageDemo';
import ParentComponent from './Components/ParentComponent';
import './index.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
      <StorageDemo />
      <ParentComponent />
    </div>
  );
}

export default App;
