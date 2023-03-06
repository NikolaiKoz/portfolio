import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('should render "Footer funciona" h1 element', () => {
    render(<Footer />);
    const headingElement = screen.getByText(/Footer funciona/i);
    expect(headingElement).toBeInTheDocument();
  });
});
