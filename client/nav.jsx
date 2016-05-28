import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

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
			<NavItem>Create</NavItem>
			<NavItem>Feed</NavItem>
			<NavItem>Logout</NavItem>
		</Nav>
 </Navbar>
);

export default topNav; 