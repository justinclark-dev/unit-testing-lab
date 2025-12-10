import { render, fireEvent } from "@testing-library/react";
import App from './App';
import { expect, test } from "vitest";

test('renders an h1 tag', () => {
  const app = render(<App />);
  const heading = app.getByRole('heading');
  expect(heading).toHaveTextContent('TODO App');
});

test('changes input', () => {
  const app = render(<App />);
  const textbox = app.getByRole('textbox');
  fireEvent.change(textbox, { target: { value: 'do something' } });
  expect(textbox.value).toBe('do something');
});

test('adds a new todo', () => {
  const app = render(<App />);
  const textbox = app.getByRole('textbox');
  const button = app.getByRole('button');
  fireEvent.change(textbox, { target: { value: 'do another'} })
  fireEvent.click(button);
  const list = app.getByRole('list');
  expect(list).toHaveTextContent('do another');
});

test('deletes a todo', () => {
  const app = render(<App />);
  const textbox = app.getByRole('textbox');
  const button = app.getByRole('button');
  fireEvent.change(textbox, { target: { value: 'to delete'} })
  fireEvent.click(button);
  const list = app.getByRole('list');
  expect(list).toHaveTextContent('to delete');
  const deleteBtn = app.getByRole('button', { name: 'Delete' });
  fireEvent.click(deleteBtn);
  expect(list).not.toHaveTextContent('to delete')
});