import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    mail: "",
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      mail:e.target.value
    })
  }
  handleCLick = () =>{

  }

  render() {
    return (
      <div>
        <h1> {this.props.child}</h1>
        <input className="input mail" placeholder="example@gmail.com" required onChange={this.handleChange}></input>
        <button className="btn submit" onClick={this.props.handleClick}> Enviar </button>
      </div>
    )
  }
}
