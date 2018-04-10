import React, { Component } from 'react'

class Microwave extends Component {
    constructor() {
        super()
        console.log('Microwave.constructor()')
    }
    componentWillMount() {
        console.log('Microwave.componentWillMount()')
    }
    render() {
        console.log('Microwave.render')
        return (
            <div>
                Microwave here
            </div>
        )
    }
    componentDidMount() {
        console.log('Microwave.componentDidMount')
    }
}
export default Microwave