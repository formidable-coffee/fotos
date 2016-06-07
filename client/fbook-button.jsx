import React from 'react'; 
import $ from 'jquery'; 
import { hashHistory } from 'react-router';


class FacebookButton extends React.Component {
  constructor (props) {
    super(props); 
 
    this.state = {
      authenticated: false,
      userMessage: "", 
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
          var access_token = response.authResponse.accessToken; 
          if (response.authResponse) {
            FB.api('/me', function(response) {
              self.setState({authenticated: true});
              console.log('in api call',response)
              $.post('/signin', {name: response.name, userId: response.id, access_token: access_token}).done(function(data) {
                console.log('success'); 
                window.fbId = response.id; 
                window.access_token = access_token; 
                hashHistory.push('dashboard'); 
              }).fail(function(err) {
                console.log(err, 'error in checkLoginState'); 
              }); 
            }); 
          } else {
            console.log('user did not authenticate'); 
          }
        }, {scope: 'public_profile,user_photos'})
      }
    }, true)
  }

  logout () {
    var self = this; 
    console.log('is this working?'); 
    FB.logout(function(response) {
      self.setState({authenticated: false}); 
      hashHistory.push('/login'); 
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
        <button className='facebook-login' onClick={this.handleClick}>Log in with Facebook</button>
      </div>
    ); 
  }
}

export default FacebookButton; 