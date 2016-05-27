import React from 'react';
import ReactDOM from 'react-dom'; 
import { Button } from 'react-bootstrap';


var sampleData = [{
	url:"http://assets.fodors.com/destinations/54494/alamo-square-san-francisco-california-usa_main.jpg",
}, {
	url: "https://pixabay.com/static/uploads/photo/2015/03/26/09/48/golden-gate-bridge-690346_960_720.jpg",
}, {
	url: "http://www.wheretraveler.com/sites/default/files/styles/main_slider/public/San-Francisco-shutterstock_121582312.jpg?itok=sGTj8sv2", 
}, {
	url: "http://www.dog-learn.com/dog-breeds/pomeranian/images/pomeranian-u6.jpg"
}, {
	url: "http://animalsbreeds.com/wp-content/uploads/2014/11/Pomeranian-11.jpg"
}];

class Main extends React.Component {
	render () {
		return (
			<div>
				<h1> Formidable Fotos </h1>
				<Button bsStyle="danger" bsSize="large">Sign In</Button>
			</div>
		); 
	}
}; 

ReactDOM.render(<Main data={sampleData} />, document.getElementsByClassName('signIn')[0]);

