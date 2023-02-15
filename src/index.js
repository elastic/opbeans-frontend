import './rum'
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'

import configureDefaultStore from './store/configureStore'
import App from './components/App';
import './index.css'
import './semantic-ui/semantic.min.css'

const store = configureDefaultStore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);