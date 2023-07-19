import React from 'react';
// import {} from './App.module.scss';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import '../styles/scss/main.scss';
import Sections from './Sections/Sections';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';
import SocialMedia from './SocialMedia/SocialMedia';
import CV from './CV/CV';

function App() {
	return (
		<div className='wrapper'>
			<Navbar />
			<Sections SectionTitle='Sobre mí' SectionComponent={<About />} />
			<Sections SectionTitle='Habilidades' SectionComponent={<Skills />} />
			<Sections SectionTitle='Experiencia' SectionComponent={<Experience />} />
			<Sections SectionTitle='Contacto' SectionComponent={<Contact />} />
			<Sections SectionTitle='Redes Sociales' SectionComponent={<SocialMedia />} />
			<Sections SectionTitle='CV' SectionComponent={<CV />} />
		</div>
	);
}

export default App;
