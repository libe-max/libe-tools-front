import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage/'
import ComponentsPage from './pages/ComponentsPage/'

const App = () => (
  <div id='app'>
    <Switch>
      <Route path='/'component={HomePage} exact />
      <Route path='/components' component={ComponentsPage} exact />
      <Route path='/' render={() => <Redirect to='/' />} />
    </Switch>
  </div>
)

export default App
