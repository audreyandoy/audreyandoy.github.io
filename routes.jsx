
import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './containers/Home';
import App from './App';

export default () => (
  <BrowserRouter>
    <div>  
      <Link to="/">Home</Link>
 

      <Route exact path="/" component={Home}/>

    </div>
  </BrowserRouter>

); 
