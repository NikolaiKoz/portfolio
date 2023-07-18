import React from 'react';
import { Container, Item } from './Links.module.scss';

const Anchor = [
	{
		name: 'About',
		title: 'About',
	},
	{
		name: 'Skills',
		title: 'Skills',
	},
	{
		name: 'Experience',
		title: 'Experience',
	},
	{
		name: 'Contact',
		title: 'Contact',
	},
	{
		name: 'Social',
		title: 'Social',
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
