import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import BundlesPage from './containers/BundlesPage'
import HomePage from './containers/HomePage'
import ToolPage from './containers/ToolPage'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => (
  <div id='app'>
    <Header />
    <Switch>
      <Route path='/'component={HomePage} exact />
      <Route path='/tools/dumb-image' component={ToolPage} exact />
      <Route path='/tools/some-module' component={ToolPage} exact />
      <Route path='/tools/some-other-tool' component={ToolPage} exact />
      <Route path='/all-bundles' component={BundlesPage} exact />
      <Route path='/' render={() => <Redirect to='/' />} />
    </Switch>
    <Footer />
  </div>
)

export default App
