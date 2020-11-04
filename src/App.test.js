import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Torbok - Podols text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Torbok - Podols/);
  expect(linkElement).toBeInTheDocument();
});
