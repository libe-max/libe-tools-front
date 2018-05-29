import React from 'react'
import { Route, Switch } from 'react-router-dom'

const HomePage = <div>Home page</div>

const App = () => (
  <div id='app'>
    <Header />
    <Switch>
      <Route path='/'component={HomePage} exact />
    </Switch>
    <Footer />
  </div>
)

export default App
