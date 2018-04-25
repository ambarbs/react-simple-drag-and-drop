# Simple React Drag n' Drop Higher Order Components

## [Demo](https://ambarbs.github.io/react-simple-drag-and-drop/)

## Getting Started

### Installation

`npm install react-simple-drag-and-drop`

### Usage

You can import each animation directly from the main package

```js
import { Draggable, Droppable } from 'react-simple-drag-and-drop'
```

## Usage

```js
const App = () => (
  render() {
    return (
      <div className="App">
        <Draggable
                        id='flower'
                        isDragAndDropElement={true}
                      >
                            <img src={flower} alt={'Pick me up and drop it on the orange box'}/>
                      </Draggable>
                      <Draggable
                        id='drag-me'
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
    );
  }
}
```

### Props

### Draggable

##### `dataKey`: string
A dataKey to hold some data from the dragged element

##### `selectedSwitch`: number
Customized data object you want to set and drag to Droppable component.

##### `onDragCallback`: function
A callback function for onDrag

##### `isDragAndDropElement`: boolean
Pass this as `true` if you want to drag and drop the complete element

### Droppable

##### `dataKey`: string
A dataKey to hold some data from the dragged element. This dataKey should be same as in the Draggable component

##### `selectedSwitch`: number
Customized data object you want to set and drag to Droppable component.

##### `onDropCallback`: function
A callback function for onDrop

##### `isDragAndDropElement`: boolean
Pass this as `true` if you want to drag and drop the complete element