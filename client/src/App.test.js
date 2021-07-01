
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import { ContextProvider } from "./context";

function renderApp(searchStarted=false) {
  return render(
    <ContextProvider value = {searchStarted}>
      <App/>
    </ContextProvider>
  )
}

test('App renders the initial content logo when user has not started the search yet', () => {
  renderApp()
  expect(screen.getByText(/work/i)).toBeInTheDocument();
});

