import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
test('renders the initial content logo when user has not started the search yet', () => {
  const { getByText } = render(<App />);
  //const logoText = screen.getByText('work');
  expect(getByText(/work/i)).toBeInTheDocument();
});
