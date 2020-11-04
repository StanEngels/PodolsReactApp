import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route,
  Switch, 
} from 'react-router-dom';
import Main from './pages/Main';
import { observer } from "mobx-react";

function App(){
  return (
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Router>
  );
}
export default observer(App)