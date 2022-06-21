import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import App from '../App';

test('renders Bonjour je suis Nicolas', () => {
  render(<App />);
  const text = screen.getByText("Bonjour, je suis Nicolas");
  expect(text).toBeInTheDocument();
}
);