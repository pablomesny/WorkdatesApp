import React from 'react'
import ReactDOM from 'react-dom/client'
import { WorkDatesApp } from './WorkDatesApp'
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import "@fontsource/roboto";
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <WorkDatesApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
