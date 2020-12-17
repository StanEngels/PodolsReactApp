import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route,
  Switch, 
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import { observer } from "mobx-react";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    //primary: {
      //light: '#fff',
      //main: '#fff',
      //dark: '#fff',
      //contrastText: '#919191',
    //},
    //secondary: {
      //light: '#adadad',
      //main: '#adadad',
      //dark: '#adadad',
      //contrastText: '#adadad',
    //},
  },
});

function App(){
  return (
    <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </Router>
    </MuiThemeProvider>
  );
}
export default observer(App)
