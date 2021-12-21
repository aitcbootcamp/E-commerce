import logoFb from "./Img/facebook-letter-logo.png";
import logoTw from "./Img/twitter.png";
import logoIn from "./Img/Union 3.png";
import classess from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classess.meinFooter}>
      <div>
          <p></p>
        <address className={classess.addres}>Addres : C.Tbilisi, Balanchine 2</address>
        <a href="https://goo.gl/maps/1gZk4XkW5qRgKcMeA" target="_blank">
          Show In Map
        </a>
      </div>
      <div className={classess.footerLogo}>
        <a href="#" target="_blank">
          <img src={logoFb} alt="Fblogo" />
        </a>
        <a href="#" target="_blank">
          <img src={logoIn} alt="instaLogo" />
        </a>
        <a href="#" target="_blank">
          <img src={logoTw} alt="logoTw" />
        </a>
      </div>
      <div>
        <address className={classess.footerContact}>
        <a href="mailto:webmaster@example.com">Email:bootchamp.edu.ge</a>
        <p>Contact Num:+995 599 99 99 99</p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
