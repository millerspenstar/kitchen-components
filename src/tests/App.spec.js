import React from 'react'
import App from '../App.js'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import Kitchen from '../Kitchen'
it('should shallow render App correctly', ()=> {
    const renderer = new ShallowRenderer()
    renderer.render(<App />)
    const result = renderer.getRenderOutput()

    console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual([
        'Kitchen is here and ready to go',
        <Kitchen/>

    ])
})

// it('renders correctly', ()=>{
// const tree = Renderer
//  .create(<App />)
// .toJSON()
// expect(tree).toMatchSnapshot()
// })