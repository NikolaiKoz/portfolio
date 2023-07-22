import React from 'react';
import PropTypes from 'prop-types';
import { Container, Icon, dNone } from './MobileMenu.module.scss';
import Links from '../Links/Links';

/**
 * Componente MobileMenu
 *
 * Este componente muestra un menú móvil que se puede abrir o cerrar mediante
 * el prop `isMenuOpen`. Cuando `isMenuOpen` es `true`, el menú es visible, y
 * cuando es `false`, el menú está oculto.
 *
 * @param {Object} props - Las props para el componente MobileMenu.
 * @param {boolean} props.isMenuOpen - Indica si el menú está abierto (true) o cerrado (false).
 *
 * @returns {JSX.Element} Componente MobileMenu.
 */
function MobileMenu({ isMenuOpen }) {
	return (
		<div className={`${isMenuOpen ? Container : dNone}`}>
			<div className={Icon}></div>
			<Links />
		</div>
	);
}

/**
 * Propiedades del componente MobileMenu.
 *
 * @prop {boolean} isMenuOpen - Indica si el menú está abierto (true) o cerrado (false).
 */
MobileMenu.propTypes = {
	isMenuOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
