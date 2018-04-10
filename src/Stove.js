import React, { Component } from 'react'

class Stove extends Component {
    constructor(props){
    super(props)
    console.log('Stove.constructor()', props)
  }
  componentWillMount(){
    console.log('Stove.componentWillMount()')
  }
    render(){
        console.log('Stove.render()')
        return (
            <div>
                Stove here
            </div>   
        )
    }
    componentDidMount(){
        console.log('Stove.componentDidMount')
      }
}
export default Stove