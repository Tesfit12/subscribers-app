import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FakeFireCone from './components/FakeFireCone'
import RealFireCone from './components/RealFireCone'
import Login from './components/loginRegister/Login'
import Register from './components/loginRegister/Register'

import App from './App';
// import AppTest from './AppTest'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>


    <Router>

      <Switch>

        <Route exact path="/" render={props => <FakeFireCone {...props} />} />
        <Route exact path="/RealFireCone" render={props => <RealFireCone {...props} />} />
        <Route path="/Register" render={props => <Register {...props} />} />
        <Route path="/Login" render={props => <Login {...props} />} />
        <App />

      </Switch>
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
