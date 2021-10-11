/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Menu from './Menu';

test('renders menu list', () => {
  render(<Menu menuItems={[{ title: 'Addition', operatorValue: 0 }]} menuWidth="300px" handleSetOperator={() => {}} />);
  const menuList = screen.getByTestId('menu-list');
  expect(menuList).toBeInTheDocument();
});

test('renders a menu list item', () => {
  render(<Menu menuItems={[{ title: 'Addition', operatorValue: 0 }]} menuWidth="300px" handleSetOperator={() => {}} />);
  const menuListItem = screen.getByTestId('menu-list-item');
  expect(menuListItem).toBeInTheDocument();
});

test('list item has title Test', () => {
  render(<Menu menuItems={[{ title: 'Test', operatorValue: 0 }]} menuWidth="300px" handleSetOperator={() => {}} />);
  const menuListItem = screen.getByText(/test/i);
  expect(menuListItem).toBeInTheDocument();
});
