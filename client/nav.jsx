import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

var topNav = (props) => (
	<Navbar>
		<Navbar.Header>
			<Navbar.Brand>
				<span>
					<p>Formidable Fotos</p>
				</span>
			</Navbar.Brand>
		</Navbar.Header>
		
		<Nav>
			<NavItem><Link to="/create" activeStyle={{ color: 'green' }}>Create</Link></NavItem>
			<NavItem><Link to="/dashboard" activeStyle={{ color: 'green' }}>Feed</Link></NavItem>
			<NavItem>Logout</NavItem>
		</Nav>
 </Navbar>
);

export default topNav; 