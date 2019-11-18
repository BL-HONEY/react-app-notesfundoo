import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import Registration from './components/registration'
import Login from './components/login'
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import DashBoard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/resetPassword/:tokens" component={ResetPassword} />
          <Route path="/dashboard" component={DashBoard} />


        </div>
      </Router>
    </div>
  )
}

export default App;
