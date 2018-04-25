import React from 'react'
import { render } from 'react-dom'
import './index.css'
import flower from './flower.jpg'
import { Draggable, Droppable } from '../../src'

const App = () => (
  <div className='app'>
        <h2>React Simple Drag n' Drop - <span className='italics'> a generic component</span></h2>
        <div className='toggle-components'>
              <Draggable
                isDragAndDropElement={true}
              >
                    <img src={flower} alt={'Pick me up and drop it on the orange box'}/>
              </Draggable>
              <Draggable
                isDragAndDropElement={true}
              >
                    <div className='draggable-div'>Drag me</div>
              </Draggable>
              <Droppable
                isDragAndDropElement={true}
              >
                    <h4>Drop box</h4>
                    <div className='drop-box'></div>
              </Droppable>
        </div>
  </div>
)
render(<App/>, document.getElementById('root'))