import React from 'react';
import { render } from 'react-dom'; 
import { Router, Route, hashHistory } from 'react-router';

import Login from './login'; 
import Main from './main';
import Feed from './feed';
import Form from './form';
// import { Button } from 'react-bootstrap';
// import $ from 'jquery'; 

var sampleData = [{
  thumbnail:"http://assets.fodors.com/destinations/54494/alamo-square-san-francisco-california-usa_main.jpg",
  src:"http://assets.fodors.com/destinations/54494/alamo-square-san-francisco-california-usa_main.jpg"
}, {
  thumbnail: "https://pixabay.com/static/uploads/photo/2015/03/26/09/48/golden-gate-bridge-690346_960_720.jpg",
  src: "https://pixabay.com/static/uploads/photo/2015/03/26/09/48/golden-gate-bridge-690346_960_720.jpg"
}, {
  thumbnail: "http://www.wheretraveler.com/sites/default/files/styles/main_slider/public/San-Francisco-shutterstock_121582312.jpg?itok=sGTj8sv2", 
  src: "http://www.wheretraveler.com/sites/default/files/styles/main_slider/public/San-Francisco-shutterstock_121582312.jpg?itok=sGTj8sv2" 
}, {
  thumbnail: "http://www.dog-learn.com/dog-breeds/pomeranian/images/pomeranian-u6.jpg",
  src: "http://www.dog-learn.com/dog-breeds/pomeranian/images/pomeranian-u6.jpg"
}, {
  thumbnail: "http://animalsbreeds.com/wp-content/uploads/2014/11/Pomeranian-11.jpg",
  src: "http://animalsbreeds.com/wp-content/uploads/2014/11/Pomeranian-11.jpg"
}];


render((  
	<Router history={hashHistory}>
    <Route path='/' component={Login}/>
    <Route path='/login' component={Login}/>
    <Route component={Main}>
    	<Route path='create' component={Form}/>
    	<Route path='dashboard' component={Feed}/>
    </Route>
  </Router>
  ), document.getElementsByClassName('mounting')[0]);

