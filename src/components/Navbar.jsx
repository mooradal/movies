import React, { Component } from 'react';

class Navbar extends Component {
	render() {	
		return (
			<div className='nav'>
				<img src="./images/logo.png" alt="logo" className='nav-logo' width='50'/>
				<div className='nav-button'>Suggest a Film</div>
			</div>
		);
	}
}

export default Navbar;