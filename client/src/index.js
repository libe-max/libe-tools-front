import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
// Components
import App from './App'
import reducer from './reducers'
// Styles
import 'normalize.css'
import './styles/style'
import './styles/fonts'
import theme from './styles/theme'
// Service worker
import registerServiceWorker from './registerServiceWorker'

// Render app ---------------------------------------------
render(
  <Provider store={createStore(reducer)}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
