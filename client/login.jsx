import React from 'react'; 
import { Button } from 'react-bootstrap'; 
// import FB from '../public/login-config'; 

class Login extends React.Component {
  constructor (props) {
    super(props); 
    this.checkLoginState = this.checkLoginState.bind(this); 
    this.testAPI = this.testAPI.bind(this); 
    this.handleClick = this.handleClick.bind(this); 
  }

  componentDidMount () {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '477241942472397',
        xfbml      : true,
        version    : 'v2.6'
      });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  statusChangeCallback (response) {
    console.log('In statusChangeCallback ', response);

    if (response.status === 'connected') {
      this.testAPI(); 
    } else if (response.status === 'not_authorized') {
      document.getElementById('status').innerHTML = 'Please log into this app';
    } else {
      document.getElementById('status').innerHTML = 'Please log into Facebook'; 
    }
  }

  checkLoginState () {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response); 
    }).bind(this); 
  }

  testAPI () {
    console.log('Welcome, fetching your information....');
    FB.api('/me', function (response) {
      console.log('Successful login for: ' + response.name); 
      document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!'; 
    });
  }

  handleClick () {
    FB.login(this.checkLoginState()); 
  }

  render () {
    return (
      <div className='login'>
        <Button onClick={this.handleClick}>Login with Facebook</Button>
      </div>
    )
  }
};

export default Login; 

