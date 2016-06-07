import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
var linkStyle = {marginTop: '15px', color:'white'};

var topNav = (props) => (
	<Navbar className="navbar">		
		<Nav className="links">
			<NavItem style={linkStyle}><Link to="/dashboard" activeClassName="active" style={linkStyle}>Dashboard</Link></NavItem>
			<NavItem style={linkStyle}><Link to="/create" activeClassName="active" style={linkStyle}>Create new story</Link></NavItem>
		</Nav>
		<Nav pullRight>
			<NavItem className="logout" onClick={() => {
        FB.logout();
        hashHistory.push('login'); 
      }}>Logout</NavItem>
		</Nav>
 </Navbar>
);

export default topNav; 

