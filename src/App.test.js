/* eslint-disable no-undef */
import { render, screen, cleanup } from '@testing-library/react';
import mockedAdditionTasks from './mock/mock-addition.json';
import App from './App';

afterEach(cleanup);

describe('Elements on page', () => {
  test('renders remove button', () => {
    render(<App />);
    const removeButton = screen.getByText(/x/i);
    expect(removeButton).toBeInTheDocument();
  });
});

describe('Data', () => {
  test('The number of tasks is 3', () => {
    const numTasks = mockedAdditionTasks.length;
    expect(numTasks).toBe(3);
  });

  test('The first property value of the first task is 1 as a string', () => {
    const firstTaskNumber = mockedAdditionTasks[0].firstNum;
    expect(firstTaskNumber).toMatch(/1/);
  });

  test('The first number of the first task is 1', () => {
    const firstTaskNumber = mockedAdditionTasks[0].firstNum;
    const parsedNum = parseInt(firstTaskNumber, 10);
    expect(parsedNum).toBe(1);
  });

  test('The first task should have property firstNum with value 1', () => {
    expect(mockedAdditionTasks[0]).toHaveProperty('firstNum', '1');
  });
});
