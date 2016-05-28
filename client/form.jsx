import React from 'react';

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

	}

	handleSubmit (e) {
		e.preventDefault();
		this.props.createNew(this.state.startDate, this.state.endDate);
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
					<select onChange={this.dropdownSelect}>
						<option></option>
						<option value="filter1">Photos of me</option>
						<option value="filter2"></option>
						<option value="filter3">Photos in other countries</option>
					</select>
					<button type="submit" onClick={this.handleSubmit}>See your photos</button>
				</form>
			</div>
		)
	}
	
};

export default Form; 