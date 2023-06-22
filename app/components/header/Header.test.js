import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from './Header';

test('renders learn react link', () => {
  render(<Header />);
  const HomeLink = screen.getByText(/Accueil/i);
  expect(HomeLink).toBeInTheDocument();
});
