import React, { Component } from 'react';

import './App.css';
import Kitchen from './Kitchen'

class App extends Component {
  state= { 
    kitchenName: "Spencer's Kitchen",
    kitchenPowerIsOn: false
  }
  constructor(){
    super()
    console.log('App.constructor()')
  }

  componentWillMount(){
    console.log('App.componentWillMount()')
  }
  render() {
    console.log('App.render()')  
    return (
      <div className="App">
      
          <Kitchen name={this.state.kitchenName} powerIsOn={this.state.kitchenPowerIsOn}/>
      </div>
    );
  }

  componentDidMount(){
    console.log('App.componentDidMount')
  }
}

export default App; 
