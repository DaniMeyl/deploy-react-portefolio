import logo from '../../assets/logo.png'
import "./footer.css"

const Footer = () => {
    return (
      <div className='footer-container'>
        <p>Copyright © 2023.</p>
        <p>Tous droits réservés DM</p>
        <img className="logo-footeur"src={logo} alt="logo"></img>
      </div>
    );
  };
  
  export default Footer;