const Header = ({ text }) => {
  return <div>{text}</div>;
};

Header.prototype = {
  text: Proptype.string.isRequired,
};

export default Header;
