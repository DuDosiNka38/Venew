import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import home from './components/pages/home';
//COmponents
import Navbar from './components/library/Navbar';
import Account from './components/pages/Account';

 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="container">
        <Switch>
          <Route path='/' exact component={home}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/sign-in' component={SignIn}/>
          <Route path='/my-account' component={Account}/>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
