import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Title from './Title';
import Badge from './Badge';

class Item extends Component {
	render() {
		return (
			<Link to={`/video/${this.props.id}`}>
				<div className='card' style={{backgroundImage:`url(${this.props.img})`}}>
					<Badge year={this.props.year}/>
					<Title title={this.props.title}/>
				</div>
			</Link>
		);	
	}
}

export default Item;