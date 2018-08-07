// React
import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import reducers from './reducers'

// Routing
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// Theme
import { ThemeProvider } from 'styled-components'
import theme from './theme'

// Components
import HomePage from './containers/HomePage'
import ComponentsPage from './pages/ComponentsPage/'

/* * * * * * * * * * * * * * * * * *
 *
 *   Init router and store
 *
 * * * * * * * * * * * * * * * * * */
const history = createHistory()
const middleware = routerMiddleware(history)
const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true
})
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(
    middleware,
    logger
  )
)

/* * * * * * * * * * * * * * * * * *
 *
 *   Render app
 *
 * * * * * * * * * * * * * * * * * */
render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <div id='app'>
          <Switch>
            <Route path='/'component={HomePage} exact />
            <Route path='/bundle/:id' render={props => <div>Edit bundle: {props.match.params.id}</div>} exact />
            <Route path='/components' component={ComponentsPage} exact />
            <Redirect from='/' to='/' />
          </Switch>
        </div>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
