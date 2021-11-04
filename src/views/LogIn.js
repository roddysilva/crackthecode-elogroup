import { Form, Stack, Col, Button, Row } from 'react-bootstrap'
import React, { Component } from 'react'
import { saveUserData } from '../services/app-auth-service'

export default class LogIn extends Component {
  state = {
    nome: '',
    password: '',
    confirmationPassword: ' '
  }

  onSubmit = () => {
    let user = {
      nome: this.state.nome,
      password: this.state.password
    }
    saveUserData(user)
    console.log(
      this.state.nome,
      this.state.password,
      this.state.confirmationPassword
    )
  }

  render() {
    return (
      <Stack gap={5} className="col-md-3 mx-auto">
        <h3>Efetuar Login</h3>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Usuario *</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ nome: e.target.value })}
                  type="name"
                  placeholder="Nome"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password *</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ password: e.target.value })}
                  type="password"
                  placeholder="Sua senha deve ter ao menos 8 caracteres, 1 especial e ao menos 1 numérico"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formConfirmationPassword">
                <Form.Label>Confirme Password *</Form.Label>
                <Form.Control
                  onChange={e =>
                    this.setState({ confirmationPassword: e.target.value })
                  }
                  isValid={
                    this.state.password === this.state.confirmationPassword
                  }
                  isInvalid={
                    this.state.password !== this.state.confirmationPassword
                  }
                  type="password"
                  placeholder="Confirme password"
                  required
                />
              </Form.Group>
              <Button onClick={this.onSubmit} variant="primary" type="submit">
                Registrar
              </Button>
            </Col>
          </Row>
        </Form>
      </Stack>
    )
  }
}
