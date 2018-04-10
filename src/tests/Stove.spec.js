import React from 'react'
import Kitchen from '../Kitchen.js'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import Stove from '../Stove'

it('should shallow render correctly', ()=> {
    const renderer = new ShallowRenderer
    renderer.render(<Stove/>)
    const result = renderer.getRenderOutput()
    
    console.log(result)

    expect (result.type).toBe('div')
    expect (result.props.children).toEqual(
        'Stove here'
    )
})