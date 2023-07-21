import React from 'react';
import { Container } from './Skills.module.scss';
import SkillSection from './SkillSection/SkillSection';

function Skills() {
	return (
		<div className={Container}>
			<SkillSection />
		</div>
	);
}

export default Skills;
