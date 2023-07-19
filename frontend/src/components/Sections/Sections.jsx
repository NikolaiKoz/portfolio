import React from 'react';
import PropTypes from 'prop-types';
import { Title, Component } from './Sections.module.scss';

/**
 * Componente Sections
 *
 * Este componente muestra una sección con un título y su contenido asociado.
 * El título se especifica a través de la prop 'SectionTitle', y el componente
 * asociado se pasa a través de la prop 'SectionComponent'.
 *
 * @param {Object} props - Las props para el componente Sections.
 * @param {string} props.SectionTitle - El título de la sección.
 * @param {JSX.Element} props.SectionComponent - El componente asociado a la sección.
 *
 * @returns {JSX.Element} Componente Sections.
 */
function Sections({ SectionTitle, SectionComponent }) {
	return (
		<div>
			<h2 className={Title}>{SectionTitle}</h2>
			<div className={Component}>{SectionComponent}</div>
		</div>
	);
}

/**
 * Propiedades del componente Sections.
 *
 * @prop {string} SectionTitle - El título de la sección.
 * @prop {JSX.Element} SectionComponent - El componente asociado a la sección.
 */
Sections.propTypes = {
	SectionTitle: PropTypes.string.isRequired,
	SectionComponent: PropTypes.element.isRequired,
};

export default Sections;
