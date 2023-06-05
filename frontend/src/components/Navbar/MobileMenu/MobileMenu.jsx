import React from 'react';
import { Container, Icon } from './MobileMenu.module.scss';
import MobileBtn from '../MobileBtn/MobileBtn';
import Links from '../Links/Links';

function MobileMenu() {
	return (
		<div className={Container}>
            <div className={Icon}>
			<MobileBtn />
            </div>
			<Links />
		</div>
	);
}

export default MobileMenu;
