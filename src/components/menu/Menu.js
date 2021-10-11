import './Menu.css';

const Menu = ({
  menuItems = [],
  menuWidth = '100%',
  handleSetOperator = () => {},
}) => (
  <ul data-testid="menu-list" className="menu-list" style={{ width: menuWidth }}>
    {(menuItems.length > 0) && menuItems.map((item) => (
      <li role="presentation" data-testid="menu-list-item" key={item.title} onClick={() => handleSetOperator(item.operatorValue)} onKeyDown={() => handleSetOperator(item.operatorValue)}>
        {item.title}
      </li>
    ))}
  </ul>
);

export default Menu;
