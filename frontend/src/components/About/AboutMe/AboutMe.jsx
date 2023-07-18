import React from 'react';
import { Wrapper, Description} from './AboutMe.module.scss';
import SocialBtn from '../../SocialBtn/SocialBtn';

function AboutMe() {
	const descriptions = [
		{
			text: 'Soy un apasionado del desarrollo web que comenzó mi carrera en programación gracias a un deseo muy específico: crear mi propio diario digital.',
		},
		{
			text: 'A pesar de no tener experiencia en programación, encontré una solución en WordPress. Sin embargo, cuando quise personalizar el diseño de mi sitio web, me encontré con problemas y me di cuenta de que necesitaba aprender más sobre desarrollo web.',
		},
		{
			text: 'Me inscribí en la Universidad de Programación y, a partir de ahí, seguí aprendiendo por mi cuenta muchas horas extras. Fue entonces cuando descubrí mi verdadera pasión: el desarrollo web.',
		},
		{
			text: 'Ahora, estoy buscando nuevas oportunidades para seguir creciendo en esta industria y contribuir con mi experiencia y habilidades para desarrollar proyectos innovadores y exitosos.',
		},
	];

	return (
		<div className={Wrapper}>
			{descriptions.map((description, index) => (
				<p key={index} className={Description}>
					{description.text}
				</p>
			))}
			<SocialBtn />
		</div>
	);
}

export default AboutMe;
