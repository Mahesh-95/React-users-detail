import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store';
import Users from './components/Users'; 
import './App.css';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Provider store= { store }>
      <Router>
        <Switch>
            <Route exact path="/" component = {Users} />
            <Route exact path="/:id" component = {UserDetail} />
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
