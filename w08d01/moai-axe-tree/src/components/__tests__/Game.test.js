import React from 'react';
import { render, prettyDOM, fireEvent, getByTestId } from '@testing-library/react';
import Game from '../Game';

describe('tests for Game component', () => {

  test('clicking on the robot-head icon toggles the cheating state', () => {
    // render the Game component
    const { debug, container } = render(<Game />);
    // debug();
    // console.log(prettyDOM(container));

    // find the robot-head icon
    // const robotIcon = getByTestId('robot-head'); // from render
    const robotIcon = getByTestId(container, 'robot-head'); // from generic import

    // click on icon
    fireEvent.click(robotIcon);

    // check to see if "cheating" class applied
    expect(robotIcon).toHaveClass('cheating');

    // click on icon
    fireEvent.click(robotIcon);

    // check to see if "cheating" class has not been applied
    expect(robotIcon).not.toHaveClass('cheating');
  });

});
