import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateTeacher from './component/CreateTeacher/CreateTeacher';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/admin/createTeacher' component={CreateTeacher}></Route>
          <Route path='/' component={CreateTeacher}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
