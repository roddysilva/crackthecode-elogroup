import { Card } from 'react-bootstrap'
import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'

export class MyDraggable extends Component {
  render() {
    return (
      <Draggable
        key={this.props.item.id}
        draggableId={this.props.item.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
          >
            <Card text="black">
              <Card.Body>{this.props.item.content}</Card.Body>
            </Card>
          </div>
        )}
      </Draggable>
    )
  }
}
