import React, { useState } from 'react';
import {
	ContainerTitle,
	Title,
	TitleIconContainer,
	TitleIcon,
	ContainerSkills,
	Img,
	ImgDescription,
} from './SkillSection.module.scss';
import { FcExpand } from 'react-icons/fc';
import html5 from '../../../assets/icons/html5.svg';
import css3 from '../../../assets/icons/css3.svg';
import javascript from '../../../assets/icons/javascript.svg';

function SkillSection() {
	const [skillsVisible, setSkillsVisible] = useState(true);

	const handleClick = () => {
		setSkillsVisible(!skillsVisible);
	};

	const data = [
		{
			src: '',
			alt: '',
			name: ''
		},
		{
			src: '',
			alt: '',
			name: ''
		},
		{
			src: '',
			alt: '',
			name: ''
		}
	];

	return (
		<div>
			<div className={ContainerTitle}>
				<h3 className={Title}>Fuerza de la trinidad</h3>
				<span className={TitleIconContainer} onClick={handleClick}>
					<FcExpand className={TitleIcon} />
				</span>
			</div>
			{skillsVisible && (
				<div className={ContainerSkills}>
					<figure>
						<img
							className={Img}
							loading='lazy'
							src={html5}
							alt='Logo de HTML'
						/>
					</figure>
					<figcaption className={ImgDescription}>HTML</figcaption>
					<figure>
						<img
							className={Img}
							loading='lazy'
							src={css3}
							alt='Logo de css3'
						/>
					</figure>
					<figcaption className={ImgDescription}>CSS</figcaption>
					<figure>
						<img
							className={Img}
							loading='lazy'
							src={javascript}
							alt='Logo de javascript'
						/>
					</figure>
					<figcaption className={ImgDescription}>Javascript</figcaption>
				</div>
			)}
		</div>
	);
}

export default SkillSection;
