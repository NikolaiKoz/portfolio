import React from 'react';

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
		<div>
			<a href={Anchor.map(item => item.name)}>
				{Anchor.map(item => item.name)}
			</a>
		</div>
	);
}

export default Links;

// rfce
