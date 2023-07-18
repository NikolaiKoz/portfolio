import React, { useState } from 'react';
import { Container, Img } from './Navbar.module.scss';
import Logo from '../../assets/logo/Logo.png';
import MobileBtn from './MobileBtn/MobileBtn';
import MobileMenu from './MobileMenu/MobileMenu';

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<nav className={Container}>
			<figure className={Img}>
				<img loading='lazy' src={Logo} alt='Jose Luis Vallejos logo image' />
			</figure>
			<MobileBtn isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			<MobileMenu isMenuOpen={isMenuOpen} />
		</nav>
	);
}

export default Navbar;
