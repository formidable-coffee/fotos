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
    var getPhotos = function (response) {
      for (element in response.data) {
        post = response.data[element]; 
        console.log(post.id+ ": " + post.message); 
      }

      if (i < 2) {
        nextPage = response.paging.next;
        console.log(nextPage);
        i++;
        $.get(nextPage, getPosts, 'json'); 
      }
    }; 
    FB.api('me/photos?fields=images,created_time&until='+endDate+'&since='+startDate, function (response) {
      console.log(response); 
      $.post({
        url: '/create',
        data: response,
        success: function() {
          console.log('success'); 
        }
      });
    })
    // FB.api('/me/photos', {since: startDate, until: endDate}, function (response) {
    //   console.log(response); 
    //   $.post({
    //     url: '/create',
    //     data: {
    //       startDate: startDate,
    //       endDate: endDate,
    //       // options: options
    //     },
    //     success: function() {
    //       console.log('success'); 
    //     }
    //   });
    // })
  }

	handleSubmit (e) {
		e.preventDefault();
		console.log("start is", this.state.startDate); 
		console.log("end is", this.state.endDate); 
    var self = this; 
    console.log(Date.parse(this.state.startDate));    // endDate = dateChange(endDate); 

		// this.submitHandler(Date.parse(self.state.startDate), Date.parse(self.state.endDate));
    this.submitHandler(self.state.startDate, self.state.endDate);

	}

	dropdownSelect (e) {
		this.setState({options: e.target.value}); 
	}

	render () {
		return (
			<div className='inputForm'> 
				<form >
					<input type="date" name="startDate" className="datePicker" onChange={(event)=> this.setState({startDate: event.target.value})} />
					<input type="date" name="endDate" className="datePicker" onChange={(event)=> this.setState({endDate: event.target.value})} />
				{/* <select onChange={this.dropdownSelect}>
						<option></option>
						<option value="filter1">Photos of me</option>
						<option value="filter2"></option>
						<option value="filter3">Photos in other countries</option>
					</select> */} 
					<button type="submit" onClick={this.handleSubmit}>See your photos</button>
				</form>
			</div>
		)
	}
	
};

export default Form; 