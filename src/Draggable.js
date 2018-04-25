import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Draggable extends Component {
      drag (ev) {
            const {draggableData, dataKey, onDragCallback, isDragAndDropElement} = this.props
            dataKey && draggableData && ev.dataTransfer.setData(dataKey, JSON.stringify(draggableData))
            isDragAndDropElement && ev.dataTransfer.setData("draggedObjectID", ev.target.id || ev.target.parentElement.id)
            onDragCallback()
      }

      render () {
            return (
              <div id = {this.props.sourceID || Math.random().toString(36).substring(7)} draggable onDragStart={(e, options) => this.drag(e)}>
                    {this.props.children}
              </div>
            )
      }
}

Draggable.propTypes = {
      dataKey: PropTypes.string,
      draggableData: PropTypes.object,
      onDragCallback: PropTypes.func,
      isDragAndDropElement: PropTypes.bool,
      sourceID: PropTypes.string,
}

Draggable.defaultProps = {
      dataKey: null,
      draggableData: {},
      onDragCallback: () => {},
      isDragAndDropElement: false,
      sourceID: null,
}
