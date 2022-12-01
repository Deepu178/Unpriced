import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './containers/Login/Login';
import Dashboard from './dashboard/Dashboard';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    <Router>
<Routes>
<Route index element={<App />} />
<Route path="login" element={<Login />} />
<Route path="dashboard" element={<Dashboard />} />
</Routes>
</Router>
  </React.StrictMode>
);
