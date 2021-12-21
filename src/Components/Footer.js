import logoFb from "./Img/facebook-letter-logo.png";
import logoTw from "./Img/twitter.png";
import logoIn from "./Img/Union 3.png";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.meinFooter}>
      <div>
        <address className={classes.addres}>Addres : C.Tbilisi, Balanchine 2</address>
        <a href="https://goo.gl/maps/1gZk4XkW5qRgKcMeA" target="_blank" className={classes.footerMapA}>
          Show In Map
        </a>
      </div>
      <div className={classes.footerLogo}>
        <a href="#" target="_blank">
          <img src={logoFb} alt="Fblogo" />
        </a>
        <a href="#" target="_blank" className={classes.instaLogoA}>
          <img src={logoIn} alt="instaLogo" />
        </a>
        <a href="#" target="_blank">
          <img src={logoTw} alt="logoTw" />
        </a>
      </div>
      <div>
        <address className={classes.footerContact}>
        <a href="mailto:webmaster@example.com" >Email:bootchamp.edu.ge</a>
        <p>Contact Num:+995 599 99 99 99</p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
