import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: null,
			endDate: null, 
			options: []
		}
	}

	handleSubmit (props) {
		props.onSubmit(this.state.startDate, this.state.endDate);
	}

	render () {
		return (
			<div className='inputForm'> 
				<form onSubmit={this.handleSubmit(this.props)}>
					<input type="date" name="startDate" className="datePicker" onChange={(event)=> this.setState({startDate: event.target.value})} />
					<input type="date" name="endDate" className="datePicker" onChange={(event)=> this.setState({endDate: event.target.value})} />
					<select>
						<option value="filter1" ref="filter1">Photos of me</option>
						<option value="filter2" ref="filter2">Liked by 10 friends</option>
						<option value="filter3" ref="filter3">Photos in other countries</option>
					</select>
					<button type="submit">See your photos</button>
				</form>
			</div>
		)
	}
	
};

export default Form; 