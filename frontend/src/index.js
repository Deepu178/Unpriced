import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Login />
  </React.StrictMode>
);
