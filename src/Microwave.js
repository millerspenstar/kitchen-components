import React, { Component } from 'react'

class Microwave extends Component {
    constructor(props) {
        super(props)
        console.log('Microwave.constructor()',props)
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