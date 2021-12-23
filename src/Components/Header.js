// main logo in Header
import logo from "./Img/pc-p-c-black-letter-logo-design-with-vector-clipart_csp46947402.jpg";
// reset for Header
import "./reset.css";
// style for header
import classes from "./Header.module.css";
// cart number/ ანუ კალათის გასაყიდი ციფრი
import CartNumber from ".//cartNumber";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <img src={logo} className={classes.logo} alt="logo" />
        <h1 className={classes.home}>Home</h1>
      </div>
      <div>
        <CartNumber />
      </div>
    </header>
  );
};

export default Header;
