import React, { Component } from 'react';

import './App.css';
import Kitchen from './Kitchen'

class App extends Component {
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
      Kitchen is here and ready to go
          <Kitchen />
      </div>
    );
  }

  componentDidMount(){
    console.log('App.componentDidMount')
  }
}

export default App; 
