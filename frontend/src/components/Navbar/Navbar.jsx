import React, { useState } from 'react';
import { Container, Img, LinksDesktop } from './Navbar.module.scss';
import Logo from '../../assets/logo/Logo.png';
import MobileBtn from './MobileBtn/MobileBtn';
import MobileMenu from './MobileMenu/MobileMenu';
import Links from './Links/Links';

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className={Container}>
			<figure className={Img}>
				<img loading='lazy' src={Logo} alt='Jose Luis Vallejos logo image' />
			</figure>
			<div className={LinksDesktop}>
				<Links />
			</div>
			<MobileBtn isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			<MobileMenu isMenuOpen={isMenuOpen} />
		</nav>
	);
}

export default Navbar;
