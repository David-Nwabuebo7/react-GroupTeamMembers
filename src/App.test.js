import { render, screen } from '@testing-library/react';
import Top from './Top';


test('renders learn react link', () => {
  render(<Top />);
  render(<buttom />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
       