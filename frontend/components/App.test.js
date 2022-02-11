import AppFunctional from "./AppFunctional"
import AppClass from "./AppClass"
import React from 'react';
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Write your tests here
test('sanity', () => {
  expect(true).toBe(false)
})

test('renders AppFunctional')
render(<AppFunctional/>);


test('renders AppClass')
render(<AppClass/>);

test('renders if an invalid email is entered', async () => {
  render(<AppFunctional/>);

  const emailInput = screen.getByLabelText(/email/i);
  userEvent.type(emailInput, 'melissa@email');
});

test('if can click left', async () => {
render(<AppFunctional/>);

const leftClick = screen.getByLabelId('left');
userEvent.type(leftClick)
});

const rightClick = screen.getByLabelId('left');
userEvent.type(rightClick)
});