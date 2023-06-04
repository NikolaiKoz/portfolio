import React from 'react';
import { Container, Img } from './Navbar.module.scss';
// import Links from './Links/Links';
import Logo from '../../assets/logo/Logo.png';
import MobileBtn from './MobileBtn/MobileBtn';

function Navbar() {
	return (
		<nav className={Container}>
			<figure className={Img}>
				<img src={Logo} alt='Jose Luis Vallejos logo image' />
			</figure>
			{/* <Links /> */}
			<MobileBtn />
		</nav>
	);
}

export default Navbar;
