import { render, screen } from '@testing-library/react';
import App from './App';

test('XOX oyun başlığını gösterir', () => {
  render(<App />);

  const titleElement = screen.getByText(/XOX Oyunu/i);

  expect(titleElement).toBeInTheDocument();
});