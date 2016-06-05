import React from 'react'; 
import $ from 'jquery'; 
import { hashHistory } from 'react-router';


class FacebookButton extends React.Component {
  constructor (props) {
    super(props); 

    this.state = {
      authenticated: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    var self = this; 
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1171407722880061',
        xfbml      : true,
        version    : 'v2.6'
      });
      console.log('init fbook', window.FB);
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  checkLoginState () {
    var self = this;  
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        self.setState({authenticated: true});     
      } else {
        FB.login(function(response) {
          console.log(response, 'outside api call')
          if (response.authResponse) {
            FB.api('/me', function(response) {
              self.setState({authenticated: true});
              $.post('/signin', response).done(function(data) {
                console.log('sucessfully sent post request for user');
                hashHistory.push('dashboard'); // Transition not working
              }).fail(function(err) {
                console.log(err, 'error in checkLoginState'); 
              }); 
            }); 
          } else {
            console.log('user did not fully authenticate'); 
          }
        })
      }
    }, true)
  }

  logout () {
    var self = this; 
    FB.logout(function(response) {
      self.setState({authenticated: false}); 
      console.log
    })
  }

  handleClick (e) {
    e.preventDefault(); 
    if (this.state.authenticated) {
      this.logout(); 
    } else {
      this.checkLoginState();  
    }
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.authenticated ? "Logout" : "Log in with Facebook"}</button>
        <div></div> 
      </div>
    ); 
  }
}

export default FacebookButton; 