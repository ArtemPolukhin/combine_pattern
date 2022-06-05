import React from 'react'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
