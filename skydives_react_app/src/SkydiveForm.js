import React, { Component } from 'react'

class SkydiveForm extends Component {
  constructor (props) {
    super(props)
    this.state = {inputValue: 'initial test input ..'}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleSubmit () {
    console.log(this.state.inputValue)
  }
  render () {
    return (
      <div>
        <input
          type='text'
          value={this.state.inputValue}
          onChange={this.handleChange}
         />
        <button
          onClick={this.handleSubmit}
        >
        Book the Skydive
        </button>
      </div>
    )
  }
}

export default SkydiveForm
