import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import Dados from './modules/Dados/Dados';

function App() {
  return (
    <div className="container-fluid">
      <header>
        <Header tituloPagina="The DevConf 2019 - São Paulo" />
      </header>
      <section id="dados">
        <Dados />
      </section>
      <footer>
        <Footer tituloPagina="The DevConf 2019 - São Paulo" />
      </footer>
    </div>
  );
}

export default App;
