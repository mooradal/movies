import React from 'react';
import movies from '../movies';
function Video({match}) {
	var data = movies[match.params.id];
	
	return(	
		<div className='container'>
			<div className='video-container'>
				<div className='loading'></div>
				<iframe title='Something' src={data.url} frameborder="0" allowFullScreen></iframe>
			</div>
			<div className='video-info'>
				<h1>{data.title}</h1>
				<p>Rating on IMDB: {data.rating}<sub>/10</sub><br/>Year Released: {data.year}<br/>genres: {data.genre.join(', ')}</p>
			</div>
		</div>
	);
}


export default Video;