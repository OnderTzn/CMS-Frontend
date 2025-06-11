import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders welcome message', () => {
  render(<Home />);
  const textElement = screen.getByText(/ONDERFLIX/i);
  expect(textElement).toBeInTheDocument();
});
