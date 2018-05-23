import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Builds from './containers/Builds'
import ToolsList from './containers/ToolsList'
import ToolPage from './containers/ToolPage'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => (
  <div id='app'>
    <Header />
    <Switch>
      <Route path='/'component={ToolsList} exact />
      <Route path='/builds' component={Builds} exact />
      <Route
        path='/tools/dumb-image-creator'
        render={() => <ToolPage type='dumb-image' />}
        exact />
      <Route path='/' render={() => <Redirect to='/' />} />
    </Switch>
    <Footer />
  </div>
)

export default App
