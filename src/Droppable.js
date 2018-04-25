import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Droppable extends Component {

      allowDrop (ev) {
            ev.preventDefault()
      }

      drop (ev) {
            ev.preventDefault()
            const {dataKey, onDropCallback, isDragAndDropElement} = this.props
            const data = dataKey && ev.dataTransfer.getData(dataKey)
            onDropCallback && onDropCallback(data)
            if (isDragAndDropElement) {
                  const draggedObject = ev.dataTransfer.getData('draggedObjectID')
                  ev.target.appendChild(document.getElementById(draggedObject))
            }
      }

      render () {
            return (
              <div onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)}>
                    {this.props.children}
              </div>
            )
      }
}

Droppable.propTypes = {
      onDropCallback: PropTypes.func,
      dataKey: PropTypes.string,
      isDragAndDropElement: PropTypes.bool,
      className: PropTypes.string,
}

Droppable.defaultProps = {
      onDropCallback: null,
      dataKey: null,
      isDragAndDropElement: false,
      className: '',
}