import './rum'
import React from 'react'
import ReactDOM from 'react-dom'
import history from './history';

import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Routes from './routes'

const store = configureStore()

import './index.css'
import './semantic-ui/semantic.min.css'

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('root')
)
