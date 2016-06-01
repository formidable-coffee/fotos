import React from 'react';
import { render } from 'react-dom'; 
import { Router, Route, hashHistory } from 'react-router';

import Login from './login'; 
import Main from './main';
// import { Button } from 'react-bootstrap';
// import $ from 'jquery'; 



render((  
	<Router history={hashHistory}>
    <Route path='/' component={Login}/>
    <Route path='/login' component={Login}/>
    <Route path='/user' component={Main}/>
  </Router>
  ), document.getElementsByClassName('signIn')[0]);

