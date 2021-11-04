import logo from './images/logo.svg'
import { Container, Row, Col, Image, Stack, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import { EtapasBoard } from './views/EtapasBoard'
import NewLead from './views/NewLead'
import { loadAppData } from './services/app-data-service'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import LogIn from './views/LogIn'
import { loadUserData } from './services/app-auth-service'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { appData: null }
  }
  logOut = () => {
    localStorage.removeItem('user')
  }

  isLoggedIn() {
    return localStorage.getItem('user') != null
  }

  redirectLogin() {
    if (!this.isLoggedIn()) {
      return <Redirect to="/login" />
    }
  }

  redirectHome() {
    if (this.isLoggedIn()) {
      return <Redirect to="/" />
    }
  }
  userSettings() {
    if (this.isLoggedIn()) {
      return (
        <Row>
          <Col> Bem vindo: {loadUserData().nome}</Col>
          <Col>
            <Button href="/login" onClick={this.logOut} variant="dark">
              LogOut
            </Button>{' '}
          </Col>
        </Row>
      )
    }
  }

  componentDidMount() {
    let data = loadAppData()
    this.setState({ appData: data })

    console.log('I was triggered during componentDidMount')
  }

  render() {
    return (
      <Router>
        <Container fluid>
          <Stack gap={5}>
            <Row>
              <Col xs={6} md={4}>
                <Image src={logo} rounded />
              </Col>
              <Col>
                <h1>Painel Leads App</h1>
              </Col>
              <Col>{this.userSettings()}</Col>
            </Row>

            <Switch>
              <Route path="/newlead">
                {this.redirectLogin()}
                <NewLead />
              </Route>
              <Route path="/login">
                {this.redirectHome()}
                <LogIn />
              </Route>
              <Route path="/">
                {this.redirectLogin()}
                <EtapasBoard />
              </Route>
            </Switch>
          </Stack>
        </Container>
      </Router>
    )
  }
}

export default App
