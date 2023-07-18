import React from 'react';
import {
	Profile,
	Title,
	Container,
    ContainerProfile
} from './About.module.scss';
import AboutMe from './AboutMe/AboutMe';

function About() {
	return (
		<div className={Container}>
			<div className={ContainerProfile}>
				<figure>
					<img
						className={Profile}
						loading='lazy'
						src='https://avatars.githubusercontent.com/u/98178495?v=4'
						alt='Jose Luis Vallejos Imagen de perfil'
					/>
				</figure>
				<figcaption>
					<h1 className={Title}>
						Jose Luis Vallejos full stack MERN Developer
					</h1>
				</figcaption>
			</div>
				<AboutMe />
		</div>
	);
}

export default About;
