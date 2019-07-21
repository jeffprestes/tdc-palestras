import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import Dados from './modules/Dados/Dados';
import Loader from './components/Loader/Loader';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      palestras: []
    }
    this.buscaDados = this.buscaDados.bind(this);
  }

  componentDidMount() {
    this.buscaDados();
  }

  buscaDados() {
    fetch('https://tdc.bz/palestras?v=json')
    .then(res => res.json())
    .then((result) => {
      this.setState( {
        isLoaded: true,
        palestras: result
      })
    })
    .catch((error) => {
      this.setState( {
        isLoaded: true,
        palestras: [],
        error: error
      })
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <header>
          <Header tituloPagina="The DevConf 2019 - São Paulo" />
        </header>
        <section id="dados">
          { this.state.isLoaded ? <Dados palestras={this.state.palestras} /> : <Loader /> }            
        </section>
        <footer>
          <Footer tituloPagina="The DevConf 2019 - São Paulo" />
        </footer>
      </div>
    );
  }
}

export default App;
