import { Form, Stack, Col, Button, Row } from 'react-bootstrap'
import React, { Component } from 'react'
import { saveNewLead } from '../services/app-data-service'

export default class NewLead extends Component {
  state = {
    nome: ''
  }
  onSubmit = () => {
    saveNewLead(this.state.nome)
  }
  handleSubmit(newLead) {
    console.log('Salvando new lead')
    console.log(newLead)
  }
  render() {
    return (
      <Stack gap={5}>
        <Row className="mx-0">
          <Col>
            <Button href="/" variant="success">
              {' '}
              Voltar{' '}
            </Button>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Entre Nome *</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ nome: e.target.value })}
                  type="name"
                  placeholder="Nome"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Entre Telefone *</Form.Label>
                <Form.Control type="phone" placeholder="Telefone" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Entre Email *</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Label>Oportunidades *</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="RPA" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Produto Digital" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Analytics" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="BPM" />
              </Form.Group>

              <Button
                href="/"
                onClick={this.onSubmit}
                variant="primary"
                type="submit"
              >
                Salvar
              </Button>
            </Col>
          </Row>
        </Form>
      </Stack>
    )
  }
}
