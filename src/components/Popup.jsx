import React, { Component } from 'react'


class Popup extends Component {
	constructor() {
		super();
		this.state = {
			input:''
		};
		this.handleClick = this.handleClick.bind(this);
	}

	sendData() {
		
		fetch('http://localhost:4000/mail?data=Hello');
	}

	handleClick() {
		
		this.setState({
			input:this.inputData
		});
		this.sendData();
	}

	render() {
		return (
			<div className='popup'>
				<h2>Type the film/s that you suggest I add:</h2>
				<input id='input' type="text" name="" placeholder='Films' ref={(input) => {this.inputData = input;}}/><button onClick={this.handleClick()}>Send</button>
			</div>
		);
	}
}

export default Popup;