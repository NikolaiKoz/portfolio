import React from 'react';
import { Container, Item } from './Links.module.scss';

const Anchor = [
	{
		name: 'Sobre mí',
		title: 'Sobre mí',
	},
	{
		name: 'Habilidades',
		title: 'Habilidades',
	},
	{
		name: 'Experiencia',
		title: 'Experiencia',
	},
	{
		name: 'Contacto',
		title: 'Contacto',
	},
	{
		name: 'Redes Sociales',
		title: 'Redes Sociales',
	},
	{
		name: 'CV',
		title: 'CV',
	},
];

function Links() {
	return (
		<ul className={Container}>
			{Anchor.map(item => (
				<li key={item.name}>
					<a className={Item} href={`#${item.name}`} title={item.title}>
						{item.name}
					</a>
				</li>
			))}
		</ul>
	);
}

export default Links;
