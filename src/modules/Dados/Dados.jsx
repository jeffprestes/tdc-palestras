import React, { Component } from 'react'
import './Dados.css'

export default class Dados extends Component {

  constructor(props) {
    super(props);
    this.state = {
      palestras : []
    }    
  }

  componentWillMount() {
    this.setState({
      palestras: [{"id":11302,"titulo":"O que aprendi ao expandir meu papel de Agile Coach além dos times","trilha_id":2991,"trilha_descricao":"Trilha Agile Coaching","descricao":"Após o final de 2017 minha atuação como Agile Coach se expandiu. Era antes limitado a um time e passei a lidar com desafios de organizações ou áreas inteiras. Tive a oportunidade de vivenciar experiências muito enriquecedoras pessoal e profissionalmente nestes últimos 2 anos.\r\n\r\nNesta sessão pretendo compartilhar estas experiências enquanto agente de mudança, na forma de lições aprendidas e recomendações. \r\n\r\nAbordarei assuntos relacionados a todo o ciclo de vida de uma mudança/evolução, desde a \"venda\" da ideia até o encerramento das atividades.\r\n\r\nSe você está realizando ou gostaria de realizar uma mudança no seu ambiente de trabalho e gostaria de se preparar melhor, venha comigo! \r\n","urlApresentacao":"https://s3-sa-east-1.amazonaws.com/thedevconf/presentations/TDC2019SP/agilecoach/QTT-7071_2019-07-19T012056_[TDC SP 2019]O que aprendi.pdf","tipo":3,"avaliacoes":[{"alternativa":"⭐⭐⭐⭐⭐","quantidade_votos":5},{"alternativa":"⭐⭐⭐⭐","quantidade_votos":6},{"alternativa":"⭐⭐⭐","quantidade_votos":6},{"alternativa":"⭐","quantidade_votos":2}]},{"id":11303,"titulo":"Desafios e Soluções de um Agile Coach ao Expandir os Horizontes de uma Empresa","trilha_id":2991,"trilha_descricao":"Trilha Agile Coaching","descricao":"Depois de 30 anos entregando Sistemas e Automação para as indústrias têxteis, uma organização entende que precisa mudar! Como o Agile Coach pode abordar esta transformação Ágil quando a cultura da empresa é orientada apenas por “realizar”?\r\n\r\nNeste talk, além dos erros, acertos e aprendizados, compartilharei abordagens, técnicas e ferramentas que estou utilizando para alinhar e atender as expectativas, formar times, buscar a melhoria dos processos, garantir a qualidade das entregas, além, é claro, de ajudar os clientes em seus negócios.","urlApresentacao":"https://s3-sa-east-1.amazonaws.com/thedevconf/presentations/TDC2019SP/agilecoach/SPP-3140_2019-07-14T015942_Desafios e Soluções de um Agile Coach ao Expandir os Horizontes de uma Empresa.pdf","tipo":3,"avaliacoes":[{"alternativa":"⭐⭐⭐⭐⭐","quantidade_votos":7},{"alternativa":"⭐⭐⭐⭐","quantidade_votos":4},{"alternativa":"⭐⭐⭐","quantidade_votos":5},{"alternativa":"⭐⭐","quantidade_votos":1},{"alternativa":"⭐","quantidade_votos":1}]}]
    })
  }

  render() {
    return(
      <div>
        <h2>Busca por palestras</h2>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2 col-md-2" htmlFor="evento">TDC: </label>
            <div className="col-sm-10 col-md-10">
              <select defaultValue={ {value: '114', label: 'TDC SP - 2019'}}  className="form-control"  name="evento" id="evento">
                <option value="114">TDC SP - 2019</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2 col-md-2" htmlFor="trilha">Trilha: </label>
            <div className="col-sm-10 col-md-10">
              <input className="form-control" type="text" name="trilha" id="trilha" placeholder="digite o nome da trilha" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2 col-md-2" htmlFor="palestra">Palestra: </label>
            <div className="col-sm-10 col-md-10">
              <input className="form-control" type="text" name="palestra" id="palestra" placeholder="digite o titulo da palestra" />
            </div>
          </div>
        </form>
        <div class="table-responsive">
          <table class="table table-striped table-condensed table-bordered table-hover">
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
              <tr>
                <td>Trilha Agile</td>
                <td>Como usar direitinho o Scrum</td>
                <td className="text-center"><span className="glyphicon glyphicon-edit"></span></td>
                <td className="text-center"><span className="glyphicon glyphicon-th-list"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}