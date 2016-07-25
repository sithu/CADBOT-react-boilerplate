import React, { Component } from 'react'

export default class App extends Component {
  render(){
    let {title, rank} = this.props.postData
    return (
      <div>
        <h2>{title}</h2>
        <div>
            <p>{rank}</p>
        </div>
      </div>
    );
  }
}