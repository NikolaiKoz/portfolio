import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  test('should render "Home funciona" h1 element', () => {
    render(<Home />);
    const headingElement = screen.getByText(/Home funciona/i);
    expect(headingElement).toBeInTheDocument();
  });
});
