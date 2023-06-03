import React from 'react';
import { FcMenu } from 'react-icons/fc';
import { Container, Img, IconContainer, Icon } from './Navbar.module.scss';
import Links from './Links/Links';
import Logo from '../../assets/logo/Logo.png';

function Navbar() {
	return (
		<nav className={Container}>
			<figure className={Img}>
				<img src={Logo} alt='Jose Luis Vallejos logo image' />
			</figure>
			<Links />
			<figure className={IconContainer}>
				<FcMenu className={Icon} />
			</figure>
		</nav>
	);
}

export default Navbar;
