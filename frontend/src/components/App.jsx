import React from 'react';
// import {} from './App.module.scss';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import '../styles/scss/main.scss';
import Sections from './Sections/Sections';

function App() {
	return (
		<div className='wrapper'>
			<Navbar />
			<Sections SectionTitle='Sobre Mi' SectionComponent={<About />} />
		</div>
	);
}

export default App;
