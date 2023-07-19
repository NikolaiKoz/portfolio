import React from 'react';
import { ContainerLinks, Icon } from './SocialBtn.module.scss';
import githubImg from '../../assets/icons/github.png';
import linkedinImg from '../../assets/icons/linkedin.png';

function SocialBtn() {
	const socialLinks = [
		{
			url: 'https://github.com/NikolaiKoz',
			title: 'Link a mi perfil de Github',
			icon: githubImg,
		},
		{
			url: 'https://www.linkedin.com/in/vallejosjoseluis/',
			title: 'Link a mi perfil de LinkedIn',
			icon: linkedinImg,
		},
	];

	return (
		<>
			<ul className={ContainerLinks}>
				{socialLinks.map(link => (
					<li key={link.title}>
						<a
							href={link.url}
							rel='noopener noreferrer'
							title={link.title}
							target='_blank'
						>
							<figure>
								<img
									className={Icon}
									loading='lazy'
									src={link.icon}
									alt={`Logo de ${link.title}`}
								/>
							</figure>
						</a>
					</li>
				))}
			</ul>
		</>
	);
}

export default SocialBtn;
