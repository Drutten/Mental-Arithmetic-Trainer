import './Hamburger.css';

const Hamburger = ({
  isOpen,
  onToggleHamburger,
}) => {
  const setClassName = () => {
    const isOpenClass = isOpen ? 'open' : 'notOpen';
    return isOpenClass;
  };

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        className={`hamburger ${setClassName()}`}
        onClick={onToggleHamburger}
        onKeyDown={onToggleHamburger}
      >
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
export default Hamburger;
