import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

class App extends Component {
  render () {
    return <div className='app'>Hello world!</div>
  }
}

// Render app ---------------------------------------------
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
