import AppFunctional from "./AppFunctional"
import AppClass from "./AppClass"
import React from 'react';
import {render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

// Write your tests here
test('sanity', () => {
  expect(true).toBe(false)
})

//Test 1 - testing to see if AppFunctional renders
test('renders AppFunctional without errors', () => { 
  render(<AppFunctional/>);
});


//Test 2 - testing to see if AppClass renders
test('renders AppClass without errors', () => { 
  render(<AppClass/>);
});

//Test 3 - testing to see if AppFunctional buttons can move, up, left, down, right
test ('tests the buttons movement right', () => {
  render(<AppClass/>);
  const buttonClick = screen.getByTestId('right');
  userEvent.click(buttonClick)
 });

//Test 4 - testing to see if App Class button can move left
 test ('tests the buttons movement left', () => {
  render(<AppClass/>);
  const buttonClick = screen.getByTestId('left');
  userEvent.click(buttonClick)
 });

//Test 5 - verify that there is an error if nothing is submitted
test('renders one error messages if user enters no values into any fields.', async () => {
  render(<AppFunctional/>);

  const submitButton = screen.getByRole('button');
  userEvent.click(submitButton);

  const errorMessages = await screen.findAllByTestId('error');
  expect(errorMessages).toHaveLength(1);
});