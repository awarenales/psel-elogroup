import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders user form input', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Usuário/i);
  expect(linkElement).toBeTruthy();
});
