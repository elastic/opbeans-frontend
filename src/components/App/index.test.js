import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.createRoot(div).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});