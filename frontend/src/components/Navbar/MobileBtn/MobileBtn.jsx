import React, { useState } from 'react';
import { FcMenu, FcAdvance } from 'react-icons/fc';
import { Container, Icon } from './MobileBtn.module.scss';

function MobileBtn() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => {
		setIsMenuOpen(!isMenuOpen)
	};
	return (
		<figure className={Container} onClick={handleClick}>
			{isMenuOpen ? <FcAdvance className={Icon} /> : <FcMenu className={Icon} />}
		</figure>
	);
}

export default MobileBtn;
