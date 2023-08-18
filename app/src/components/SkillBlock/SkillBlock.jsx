import { useState, useEffect } from 'react';
import { getAllSkills } from '@/router/api.routes';

export default function SkillBlock() {
	/* <-------------------- Obtener las skills de la API --------------------> */

	const [skills, setSkills] = useState([]);

	const skillsData = async => {
		const response = fetch(getAllSkills(), {
			method: GET,
		});

		console.log(response);

		skillsData();
	};

	return (
		<>
			<h3>Titulo del bloque de skill</h3>
		</>
	);
}
