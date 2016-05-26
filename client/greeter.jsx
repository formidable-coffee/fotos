import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
      <div>
      	GREET
      </div>
    );
  }
}

export default Greeter
    