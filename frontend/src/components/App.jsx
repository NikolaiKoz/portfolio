import React from 'react';
// import {} from './App.module.scss';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import '../styles/scss/main.scss';

function App() {
	return (
		<div className='wrapper'>
			<Navbar />
			<About />
		</div>
	);
}

export default App;
