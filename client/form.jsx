import React from 'react';
import $ from 'jquery'; 
import { hashHistory } from 'react-router';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: null,
			endDate: null, 
			options: null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.dropdownSelect = this.dropdownSelect.bind(this);
    this.submitHandler = this.submitHandler.bind(this); 
	}
  
  submitHandler (startDate, endDate, options) {
    console.log(startDate, endDate, 'in submit handler');
    FB.api('me/photos?fields=images,created_time&limit=2000&until='+endDate+'&since='+startDate, function (response) {
      console.log(response);
      var data = {
              id: window.fbId,
              photos: response
            };
      $.post({
        url: '/create',
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function() {
          console.log('success');
          hashHistory.push('dashboard');  
        }
      });
    }); 
  }

	handleSubmit (e) {
		e.preventDefault();
		console.log("start is", this.state.startDate); 
		console.log("end is", this.state.endDate); 

    this.submitHandler(this.state.startDate, this.state.endDate);

	}

	dropdownSelect (e) {
		this.setState({options: e.target.value}); 
	}

	render () {
		return (
			<div className='inputForm'>
        <form> 
          <p className='inputs'>
					 <label>Start Date: </label>
           <input type="date" name="startDate" className="datePicker" onChange={(event)=> this.setState({startDate: event.target.value})} />
					</p>
          <p className='inputs'>
            <label>End Date: </label>
            <input type="date" name="endDate" className="datePicker" onChange={(event)=> this.setState({endDate: event.target.value})} />
				  </p>
        {/* <select onChange={this.dropdownSelect}>
						<option></option>
						<option value="filter1">Photos of me</option>
						<option value="filter2"></option>
						<option value="filter3">Photos in other countries</option>
					</select> */} 
					<p>
            <button type="submit" onClick={this.handleSubmit}>See your photos</button>
				  </p>
        </form>
      </div>
		)
	}
	
};

export default Form; 