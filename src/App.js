import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Section from './sections/Section';
import SecondSec from './sections/SecondSec';
function App() {
  return (
    <div className="App">
      <Section/>
      {/* <Router>
        <Section/>
        <Switch>
          <Route path='/secondSec' exact component={SecondSec} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
