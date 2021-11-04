import { Table, Card, Row, Button, Col } from 'react-bootstrap'
import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { DroppableColumn } from '../components/DroppableColumn'
import { loadAppData, saveAppData } from '../services/app-data-service'

export class EtapasBoard extends Component {
  state = loadAppData()

  render() {
    return (
      <Col>
        <Row className="mx-0">
          <Col>
            <Button href="/newlead" variant="primary">
              {' '}
              Novo Lead (+){' '}
            </Button>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Table striped bordered hover variant="dark" style={{ width: 20 }}>
              <thead>
                <tr>
                  {this.state.etapaOrder.map(columnId => {
                    const column = this.state.etapas[columnId]
                    return <th>{column.title}</th>
                  })}
                </tr>
                <tr>
                  {this.state.etapaOrder.map(columnId => {
                    const column = this.state.etapas[columnId]
                    const leads = column.leadIds.map(
                      leadId => this.state.leads[leadId]
                    )
                    let content = leads.map(lead => {
                      return lead.content
                    })
                    return (
                      <td>
                        <Card style={{ width: '24rem', height: '24rem' }}>
                          <Card.Body>
                            <DroppableColumn id={column.id} list={leads} />
                          </Card.Body>
                        </Card>
                      </td>
                    )
                  })}
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </DragDropContext>
        </Row>
      </Col>
    )
  }
  onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = this.state.etapas[source.droppableId]
    const finish = this.state.etapas[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.leadIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        leadIds: newTaskIds
      }

      const newState = {
        ...this.state,
        etapas: {
          ...this.state.etapas,
          [newColumn.id]: newColumn
        }
      }
      this.saveDatas(newState)
      this.setState(newState)
      return
    }

    const startTaskIds = Array.from(start.leadIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      leadIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.leadIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      leadIds: finishTaskIds
    }

    const newState = {
      ...this.state,
      etapas: {
        ...this.state.etapas,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.saveDatas(newState)
    this.setState(newState)
  }

  saveDatas(newState) {
    saveAppData(newState)
  }
}
