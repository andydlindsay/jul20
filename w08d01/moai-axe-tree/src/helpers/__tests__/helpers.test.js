import { announceResult, chooseRobotItem, genFeedbackMessage } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('genFeedbackMessage function', () => {
  test('returns appropriate message when given "Lost"', () => {
    const loss = genFeedbackMessage('Lost');
    expect(loss).toEqual('You lost!');
  });

  test('returns appropriate message when given "Won"', () => {
    const win = genFeedbackMessage('Won');
    expect(win).toEqual('Good job!');
  });

  test('returns appropriate message when given "Tied"', () => {
    const tie = genFeedbackMessage('Tied');
    expect(tie).toEqual('Tie game!');
  });

  test('returns appropriate message when given "Waiting"', () => {
    const waiting = genFeedbackMessage('Waiting');
    expect(waiting).toEqual('Waiting for your choice!');
  });
});

describe('chooseRobotItem function', () => {
  test('returns "Moai" every time', () => {
    const result = chooseRobotItem();
    expect(result).toBe('Moai');
  });
});
