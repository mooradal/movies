import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import Video from './Video';
import './style.css';
import Popup from './Popup'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					{/* <Popup/> */}
					<Route exact path="/" component={Main} />
					<Route path="/video/:id" component={Video} />
					<Footer />
				</div>	
			</Router>
		);
	}
}

export default App;