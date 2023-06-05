import React, { useState } from 'react';
import { Container, Img } from './Navbar.module.scss';
// import Links from './Links/Links';
import Logo from '../../assets/logo/Logo.png';
import MobileBtn from './MobileBtn/MobileBtn';
import MobileMenu from './MobileMenu/MobileMenu';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className={Container}>
			<figure className={Img}>
				<img src={Logo} alt='Jose Luis Vallejos logo image' />
			</figure>
			{/* <Links /> */}
			<MobileBtn handleClick={handleClick} />
			{isOpen && <MobileMenu />}
		</nav>
	);
}

export default Navbar;
