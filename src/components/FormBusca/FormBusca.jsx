import React, { Component } from 'react'

export default class FormBusca extends Component {

  render() {
    return (
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
              <input className="form-control" type="text" name="trilha" id="trilha" placeholder="digite o nome da trilha" onChange={this.props.filtroTrilha} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2 col-md-2" htmlFor="palestra">Palestra: </label>
            <div className="col-sm-10 col-md-10">
              <input className="form-control" type="text" name="palestra" id="palestra" placeholder="digite o titulo da palestra" onChange={this.props.filtroPalestra} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}