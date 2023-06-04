import React from 'react';
import { FcMenu } from 'react-icons/fc';
import { Container, Icon } from './MobileBtn.module.scss';

function MobileBtn() {
	const handleClick = () => {
		alert('Boton Movil Click');
	};
	return (
		<figure className={Container} onClick={handleClick}>
			<FcMenu className={Icon} />
		</figure>
	);
}

export default MobileBtn;
