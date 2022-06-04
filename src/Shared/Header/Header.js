import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <header className='main-header'>
      <nav>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='nav-link'>
          <CustomLink to='/login'>Login</CustomLink>
          <Link className='signUp' to=''>
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
