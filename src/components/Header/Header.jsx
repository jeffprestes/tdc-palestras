import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {

  render() {
    return (
      <table cellPadding="0" cellSpacing="0" align="center">
        <thead>
        <tr>
          <td valign="middle" className="td-top">
            <a target="_blank"
                href="http://www.thedevelopersconference.com.br"
                title="The Developer's Conference | Site">
              <img src="https://s3-sa-east-1.amazonaws.com/thedevconf/img/logo/logo-tdc-horizontal-branco_183x52.png"
                    alt="Logo TheDevConf" width="183" height="52"
                    align="left" />
            </a>
          </td>
          <td className="td-titulo">
            { this.props.tituloPagina }
          </td>
        </tr>
        </thead>
      </table>
    )
  }
}