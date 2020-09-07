import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';

// import function to be mocked
import axios from 'axios';

// tell jest to mock the function
jest.mock('axios');

// fake data to be returned
const data = {
  resultCount: 3,
  results: [
    { id: 1, name: 'Alice', score: 10 },
    { id: 2, name: 'Bob', score: 5 },
    { id: 3, name: 'Carol', score: 2 }
  ]
};

test('Axios mock test', async() => {
  // render component and get button
  const { getByTestId, findByText } = render(<Result status="Waiting" />);
  const button = getByTestId('fetch-highscores');

  // set up fake data for axios response
  axios.get.mockResolvedValue({ data });

  // fetch the high-scores
  fireEvent.click(button);

  // check if "Carol" is in the DOM
  // 1. return a Promise
  // return findByText('Carol');

  // 2. make Jest wait for the promise to resolve
  // return expect(findByText('Carol')).resolves.toBeTruthy();

  // 3. async/await
  await findByText('Carol');
});


test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});
