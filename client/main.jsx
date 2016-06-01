import React from 'react';
import Form from './form';
import Nav from './nav';
import { Button } from 'react-bootstrap';
import Feed from './feed';

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

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this); 
  }
  
  submitHandler (startDate, endDate, options) {
    $.post({
      url: '/create',
      data: {
        startDate: startDate,
        endDate: endDate,
        options: options
      },
      success: function() {
        console.log('success'); 
      }
    })
  }

  render () {
    return (
      <div>
        <header>
          <Nav />
        </header>
        <h1>Formidable Fotos    Main - This should hopefully work! :)</h1>
        <Feed arcs={sampleData} />
      </div>
    ); 
  }
}; 

export default Main;