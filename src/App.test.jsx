import { render } from "@testing-library/react";
import App from './App';
import { expect, test } from "vitest";

test('renders an h1 tag', () => {
  const app = render(<App />);
  const heading = app.getByRole('heading');
  expect(heading).toHaveTextContent('TODO App');
});