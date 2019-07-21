import React, { Component } from 'react'
import './Dados.css'
import FormBusca from '../../components/FormBusca/FormBusca';

export default class Dados extends Component {

  _palestrasCarregadas = [];
  _textoFiltroPalestra = '';
  _textoFiltroTrilha = '';

  constructor(props) {
    super(props);
    this._palestrasCarregadas = this.props.palestras;
    this.state = {
      palestras : this._palestrasCarregadas,
    }   
    this.filtroTrilha = this.filtroTrilha.bind(this); 
    this.filtroPalestra = this.filtroPalestra.bind(this);
    this.filtro = this.filtro.bind(this);
  }

  filtro() {
    if (this._textoFiltroTrilha.length > 0 || this._textoFiltroPalestra.length > 0) {
      let palestrasFiltradas = this._palestrasCarregadas.filter((palestra) => {
        return palestra.trilha_descricao.toLowerCase().startsWith('trilha ' + this._textoFiltroTrilha)
      })
      palestrasFiltradas = palestrasFiltradas.filter((palestra) => {
        return palestra.titulo.toLowerCase().includes(this._textoFiltroPalestra)
      })
      this.setState({
        palestras: palestrasFiltradas
      });
    } else {
      this.setState({
        palestras: this._palestrasCarregadas
      })
    }
  }

  filtroTrilha(event) {
    this._textoFiltroTrilha=event.target.value;
    this.filtro();
  }

  filtroPalestra(event) {
    this._textoFiltroPalestra=event.target.value;
    this.filtro();
  }
    
  render() {
    return(
      <div>
        <FormBusca filtroTrilha={this.filtroTrilha} filtroPalestra={this.filtroPalestra} />
        <div className="tab-responsive">
          <table className="table table-striped table-condensed table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center text-table-title">Trilha</th>
                <th colSpan="3" className="text-center text-table-title">Palestra</th>                
              </tr>
            </thead>
            <tbody>
              {this.state.palestras.map(
                (palestra, index) => {
                  return (
                    <tr key={index}>
                      <td>{palestra.trilha_descricao}</td>
                      <td>{palestra.titulo}</td>
                      <td className="text-center"><a href={'https://tdc.bz/' + palestra.id}><span className="glyphicon glyphicon-edit"></span></a></td>
                      <td className="text-center"><a href={'https://tdc.bz/' + palestra.id + '/avaliacao'}><span className="glyphicon glyphicon-th-list"></span></a></td>
                    </tr>
                  )
                }
              )}              
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}