import React, { Component } from 'react'
import Microwave from './Microwave.js'
import Stove from './Stove.js'
class Kitchen extends Component {
    constructor(props) {
        super(props)
        console.log('Kitchen.constructor()', props)
    }

    componentWillMount() {
        console.log('Kitchen.componentWillMount()')
    }
    
    render() {
        console.log('Kitchen.render()')
        return (
            <div>
                <header>
                    <h1>{this.props.name}</h1>
                </header>
                <Microwave powerIsOn={this.props.powerIsOn} />
                <Stove powerIsOn={this.props.powerIsOn}/>
            </div>)

    }

    componentDidMount() {
        console.log('Kitchen.componentDidMount')
    }

}

export default Kitchen