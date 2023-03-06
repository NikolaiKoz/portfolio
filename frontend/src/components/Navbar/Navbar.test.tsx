import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('should render "Navbar funciona" h1 element', () => {
    render(<Navbar />);
    const headingElement = screen.getByText(/Navbar funciona/i);
    expect(headingElement).toBeInTheDocument();
  });
});
