import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
// Components
import reducer from './reducers'
import theme from './theme'
// Service worker
import registerServiceWorker from './registerServiceWorker'

// Create store
const store = createStore(reducer)
import HomePage from './containers/HomePage'
import ComponentsPage from './pages/ComponentsPage/'

// Render app ---------------------------------------------
render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <div id='app'>
          <Switch>
            <Route path='/'component={HomePage} exact />
            <Route path='/components' component={ComponentsPage} exact />
            <Route path='/' render={() => <Redirect to='/' />} />
          </Switch>
        </div>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
