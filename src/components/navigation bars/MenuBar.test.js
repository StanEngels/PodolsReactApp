import { render, screen } from '@testing-library/react';
import MenuBar from './MenuBar';

test('renders menubar', () => {
  render(<MenuBar />);
  const linkElement = screen.getByText(/Presets/);
  expect(linkElement).toBeInTheDocument();
});
