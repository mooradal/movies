import React, { Component } from 'react';
import Item from './Item';
import movies from '../movies';

class Main extends Component {
	
	render() {
		var data = movies.map((element) => {
			return <Item img={element.img} title={element.title} year={element.year} id={element.id}/>;
		});
		console.log(data);

		return (
			<div className='main'>
				{data}
			</div>
		);
	}
}

export default Main;