/* eslint-disable no-undef */
import { render, screen, cleanup } from '@testing-library/react';
import Key from './Key';

afterEach(cleanup);

describe('Elements on page', () => {
  test('renders remove button', () => {
    render(<Key buttonText="2" />);
    const key = screen.getByText(/2/);
    expect(key).toBeInTheDocument();
  });
});
