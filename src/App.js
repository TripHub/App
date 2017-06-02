import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Trip from './pages/trip'
import Tickets from './pages/tickets'
import Money from './pages/money'
import NotFound from './pages/error/notFound'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Trip} />
          <Route path='/tickets' component={Tickets} />
          <Route path='/money' component={Money} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
