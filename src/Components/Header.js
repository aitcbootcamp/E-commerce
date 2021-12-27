// main logo in Header
import logo from "./Img/pc-p-c-black-letter-logo-design-with-vector-clipart_csp46947402.jpg";
// reset for Header
import "./reset.css";
// style for header
import classes from "./Header.module.css";
// cart number/ ანუ კალათის გასაყიდი ციფრი
import CartNumber from ".//cartNumber";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        {" "}
        <Link to="/">
          {" "}
          <img src={logo} className={classes.logo} alt="logo" />
        </Link>
      </div>
      <div>
        <Link to="/cart">
          {" "}
          <CartNumber />{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;
