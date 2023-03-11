import React from 'react';
import './App.scss';
import '../scss/modules/_modules.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

function App() {
	return (
		<div className='App'>
			<h1>App funciona</h1>
			<Navbar />
			<Header />
			<Footer />
		</div>
	);
}

export default App;
