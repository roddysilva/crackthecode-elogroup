import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import { MyDraggable } from './MyDraggable'

export class DroppableColumn extends Component {
  render() {
    return (
      <Droppable droppableId={this.props.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              background: snapshot.isDraggingOver ? 'lightgrey' : 'white',
              padding: 8,
              height: 300
            }}
          >
            {this.props.list.map((item, index) => (
              <MyDraggable item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )
  }
}
