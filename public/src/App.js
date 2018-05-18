import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Builds from './layouts/Builds'
import ToolsList from './layouts/ToolsList'
import Tool from './layouts/Tool'

const App = () => (
  <div id='app'>
    <Header />
    <Switch>
      <Route path='/'component={ToolsList} exact />
      <Route path='/builds' component={Builds} exact />
      <Route path='/tools' component={ToolsList} exact />
      <Route path='/tools/:toolName' component={Tool} exact />
      <Route path='/' render={() =>{ window.location.replace('/') }} />
    </Switch>
    <Footer />
  </div>
)

export default App
