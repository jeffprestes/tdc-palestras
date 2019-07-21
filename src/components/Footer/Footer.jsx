import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <hr/>
        <table cellPadding="0" cellSpacing="0" align="center">
          <tbody>
            <tr>
              <td colSpan="8" className="td-link">
                <a target='_blank'
                href='http://www.thedevelopersconference.com.br' 
                title={ this.props.tituloPagina }>www.thedevelopersconference.com.br</a>
              </td>
            </tr>
            <tr>
              <td valign="top" className="td-caixa td-caixa-vermelho">
                &nbsp;
              </td>
              <td valign="top" className="td-caixa td-caixa-vemelhodestaque">
                &nbsp;
              </td>
              <td valign="top" className="td-caixa td-caixa-laranja">
                &nbsp;
              </td>
              <td valign="top" className="td-caixa td-caixa-verde">
                &nbsp;
              </td>
              <td valign="top" className="td-caixa td-caixa-verdeescuro">
                &nbsp;
              </td>
              <td valign="top" className="td-caixa td-caixa-azulclaro">
                &nbsp;
              </td>
              <td valign="top" className="td-caixa-azul">
                &nbsp;
              </td>
              <td valign="top" className="td-caixa td-caixa-preto">
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}