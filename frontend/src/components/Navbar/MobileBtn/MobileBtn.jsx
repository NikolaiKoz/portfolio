import React from 'react';
import PropTypes from 'prop-types';
import { FcMenu, FcAdvance } from 'react-icons/fc';
import { Container, Icon } from './MobileBtn.module.scss';

/**
 * Componente MobileBtn
 *
 * Este componente muestra un botón móvil que alterna su icono dependiendo del estado
 * `isMenuOpen`. Cuando el botón es clicado, se llama a la función `toggleMenu` para
 * cambiar el estado del menú.
 *
 * @param {Object} props - Las props para el componente MobileBtn.
 * @param {boolean} props.isMenuOpen - Indica si el menú está abierto (true) o cerrado (false).
 * @param {function} props.toggleMenu - Función para cambiar el estado del menú.
 *
 * @returns {JSX.Element} Componente MobileBtn.
 */
function MobileBtn({ isMenuOpen, toggleMenu }) {
	return (
		<figure className={Container} onClick={toggleMenu}>
			{isMenuOpen ? (
				<FcAdvance className={Icon} />
			) : (
				<FcMenu className={Icon} />
			)}
		</figure>
	);
}

/**
 * Propiedades del componente MobileBtn.
 *
 * @prop {boolean} isMenuOpen - Indica si el menú está abierto (true) o cerrado (false).
 * @prop {function} toggleMenu - Función para cambiar el estado del menú.
 */
MobileBtn.propTypes = {
	isMenuOpen: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired,
};

export default MobileBtn;
