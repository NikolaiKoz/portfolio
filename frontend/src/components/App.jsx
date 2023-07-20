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
import background from '../assets/videos/BackgroundNeon.mp4';
import RGBLine from './RGBLine/RGBLine';

function App() {
	return (
		<>
			<div className='wrapper'>
				<Navbar />
				<RGBLine />
				<Sections SectionTitle='Sobre mí' SectionComponent={<About />} />
				<Sections SectionTitle='Habilidades' SectionComponent={<Skills />} />
				<Sections
					SectionTitle='Experiencia'
					SectionComponent={<Experience />}
				/>
				<Sections SectionTitle='Contacto' SectionComponent={<Contact />} />
				<Sections
					SectionTitle='Redes Sociales'
					SectionComponent={<SocialMedia />}
				/>
				<Sections SectionTitle='CV' SectionComponent={<CV />} />
			</div>
			<video
				className='videoBackground'
				src={background}
				autoPlay
				loop
				muted
			></video>
		</>
	);
}

export default App;
