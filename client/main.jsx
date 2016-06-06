import React from 'react';
import Nav from './nav';
import { Button } from 'react-bootstrap';
import Feed from './feed';



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

        
        {this.props.children}

      
      </div>
    ); 
  }
}; 

export default Main;