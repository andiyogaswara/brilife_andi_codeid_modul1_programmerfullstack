import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from './Configs/routes'
import './App.css';



class App extends Component {

  render() {
    return (
      <Router basename="/web-client">
        <div>learn react</div>
        <Switch>
          {routes.map((route, index) =>
            <Route key={index} path={route.path} exact={route.exact} render={props => <route.component {...props} {...route.props} />} />

          )}
        </Switch>
      </Router>
    );
  }
}

export default App;
