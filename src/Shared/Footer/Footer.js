import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='logo-footer-section'>
          <div className='footer-logo'>
            <img src={logo} alt='' />
          </div>
          <div className='footer-description'>
            {/* firs one footer description */}
            <ul>
              <li>
                <Link to=''>About Online Food</Link>
              </li>
              <li>
                <Link to=''>Read our blog</Link>
              </li>
              <li>
                <Link to=''>Sign up to deliver</Link>
              </li>
              <li>
                <Link to=''>Add your restaurant</Link>
              </li>
            </ul>
            {/* second one foote descrioption */}
            <ul>
              <li>
                <Link to=''>About Online Food</Link>
              </li>
              <li>
                <Link to=''>About Online Food</Link>
              </li>
              <li>
                <Link to=''>About Online Food</Link>
              </li>
              <li>
                <Link to=''>About Online Food</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='copy-right-div'>
          <div>
            <p>
              <span>Copyright</span> &copy; 2022 online food
            </p>
          </div>
          <div className='footer-link'>
            <Link to=''>Privacy Policy.</Link>
            <Link to=''>Terms od Use.</Link>
            <Link to=''>Pricing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
