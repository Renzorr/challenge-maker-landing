import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
    </header>
  );
}

export default Header;
