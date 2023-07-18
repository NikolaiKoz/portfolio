import React from 'react';
import {
	Profile,
	Title,
	Description,
	Wrapper,
	Container,
} from './About.module.scss';
import SocialBtn from '../SocialBtn/SocialBtn';

function About() {
	return (
		<div className={Container}>
			<div>
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
			<div className={Wrapper}>
				<p className={Description}>
					Soy un apasionado del desarrollo web que comenzó mi carrera en
					programación gracias a un deseo muy específico: crear mi propio diario
					digital.
				</p>
				<p className={Description}>
					A pesar de no tener experiencia en programación, encontré una solución
					en WordPress. Sin embargo, cuando quise personalizar el diseño de mi
					sitio web, me encontré con problemas y me di cuenta de que necesitaba
					aprender más sobre desarrollo web.
				</p>
				<p className={Description}>
					Me inscribí en la Universidad de Programación y, a partir de ahí,
					seguí aprendiendo por mi cuenta muchas horas extras. Fue entonces
					cuando descubrí mi verdadera pasión: el desarrollo web.
				</p>
				<p className={Description}>
					Ahora, estoy buscando nuevas oportunidades para seguir creciendo en
					esta industria y contribuir con mi experiencia y habilidades para
					desarrollar proyectos innovadores y exitosos.
				</p>
                <SocialBtn />
			</div>
		</div>
	);
}

export default About;
