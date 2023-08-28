import { render, screen } from '@testing-library/react';
import App from './App';
import TestElement from './testElement';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('check react text', () => {
  render(<TestElement />);
  const textElement = screen.getByText(/Hello ODI!!/);
  expect(textElement).toBeInTheDocument();
});
