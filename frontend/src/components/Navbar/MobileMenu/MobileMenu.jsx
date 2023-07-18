import React from 'react';
import { Container, Icon } from './MobileMenu.module.scss';
import Links from '../Links/Links';

function MobileMenu() {
	return (
		<div className={Container}>
            <div className={Icon}>
            </div>
			<Links />
		</div>
	);
}

export default MobileMenu;
