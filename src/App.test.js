import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders the name correctly', () => {
  render(<App />);
  const nameElement = screen.getByText('Hello Shravan');
  expect(nameElement).toBeInTheDocument();
});
