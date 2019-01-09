import React, { Component } from 'react';

class Badge extends Component {
	render() {
		return (
			<div className='badge'>
				{this.props.year}
			</div>
		);
	}
}

export default Badge;