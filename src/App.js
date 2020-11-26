import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route,
  Switch, 
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import { observer } from "mobx-react";

function App(){
  return (
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </Router>
  );
}
export default observer(App)
