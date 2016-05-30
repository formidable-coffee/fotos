import React from 'react'; 
import FB from '../public/login-config'; 

class Login extends React.Component {
  constructor (props) {
    super(props); 
  }

  render() {
    <fb:login-button scope='public_profile, email' onlogin='checkLoginState();'></fb:login-button>
  }
}