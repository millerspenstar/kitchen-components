import React from 'react'
import Kitchen from '../Kitchen.js'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import Microwave from  '../Microwave'
import Stove from '../Stove'
// it('renders correctly', () => {
//     const tree = Renderer
//         .create(<Kitchen />)
//         .toJSON()
//     expect(tree).toMatchSnapshot()
// })

it('should shallow renders correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Kitchen />)
    const result = renderer.getRenderOutput()

    console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual([
        'Kitchen is here and ready to go',
        <Microwave/>,
        <Stove/>
    ])
})