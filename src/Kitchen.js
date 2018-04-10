import React, { Component } from 'react'
import Microwave from './Microwave.js'
import Stove from './Stove.js'
class Kitchen extends Component {
    constructor() {
        super()
        console.log('Kitchen.constructor()')
    }

    componentWillMount() {
        console.log('Kitchen.componentWillMount()')
    }
    
    render() {
        console.log('Kitchen.render()')
        return (
            <div>
                Kitchen is here and ready to go
                <Microwave />
                <Stove />
            </div>)

    }

    componentDidMount() {
        console.log('Kitchen.componentDidMount')
    }

}

export default Kitchen