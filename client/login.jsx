import React from 'react'; 
import FacebookButton from './fbook-button'; 
import Button from 'react-bootstrap/lib/Button';

var Login = () => (
  <div id="background">
    <div className="login-wrapper">
      <div className="login-container">
        <div className ="login-title">
          <h1>Formidable Fotos</h1>
          <h4>Quick and Classy Memories... Served Hot</h4>
        </div>
        <div className="login-button">
          <FacebookButton />
        </div>
      </div>
    </div>
  </div>

); 

export default Login; 

