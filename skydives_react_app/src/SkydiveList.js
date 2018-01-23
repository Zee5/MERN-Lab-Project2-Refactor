import React, { Component } from 'react'

class SkydiveList extends Component {
    constructor(props){
        super(props)
        this.state = {
            skydives:[]
        }
    }


    componentDidMount(){
        fetch('/api/skydives')
        .then(data => data.json())
        .then(skydives => this.setState({skydives}))

    }

   render () {
    return (
        <div>
            <h1>Book Your Skydiving!</h1>
          </div>
      )
  }
}
export default SkydiveList
