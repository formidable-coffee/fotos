//*** 
// Where does this script belong? 
//***

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

var statusChangeCallback = function(response) {
  console.log('In statusChangeCallback ', response);

  if (response.status === 'connected') {
    testAPI(); 
  } else if (response.status === 'not_authorized') {
    document.getElementById('status').innerHTML = 'Please log into this app';
  } else {
    document.getElementById('status').innerHTML = 'Please log into Facebook'; 
  }
};

var checkLoginState = function () {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response); 
  }); 
};

var testAPI = function () {
  console.log('Welcome, fetching your information....');
  FB.api('/me', function (response) {
    console.log('Successful login for: ' + response.name); 
    document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!'; 
  });
}; 