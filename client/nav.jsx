import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
var linkStyle = {marginTop: '20px', color:'white'};

var topNav = (props) => (
	<Navbar className="navbar">		
		<Nav className="links">
			<NavItem style={linkStyle}><Link to="/dashboard" activeClassName="active" style={linkStyle}>Dashboard</Link></NavItem>
			<NavItem style={linkStyle}><Link to="/create" activeClassName="active" style={linkStyle}>Create new story</Link></NavItem>
		</Nav>
		<Nav pullRight>
			<NavItem className="logout"><Link to="/login">Logout</Link></NavItem>
		</Nav>
 </Navbar>
);

export default topNav; 

