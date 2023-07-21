import React from 'react';
import {
	ContainerTitle,
	Title,
	TitleIconContainer,
	TitleIcon,
	ContainerSkills,
} from './SkillSection.module.scss';
import { FcExpand } from 'react-icons/fc';
// import html5 from '../../../assets/icons/html5.svg';
// import css3 from '../../../assets/icons/css3.svg';
// import javascript from '../../../assets/icons/javascript.svg';

function SkillSection() {
	return (
		<div>
			<div className={ContainerTitle}>
				<h3 className={Title}>Fuerza de la trinidad</h3>
				<span className={TitleIconContainer}>
					<FcExpand className={TitleIcon} />
				</span>
			</div>
			<div className={ContainerSkills}>
                
            </div>
		</div>
	);
}

export default SkillSection;
