import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
	test('should render "Header funciona" h1 element', () => {
		render(<Header />);
		const headingElement = screen.getByText(/Header funciona/i);
		expect(headingElement).toBeInTheDocument();
	});
});
