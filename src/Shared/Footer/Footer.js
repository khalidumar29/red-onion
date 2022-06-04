import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
const Footer = () => {
  return (
    <footer className='bg-[#191818f5]'>
      <div className='footer p-10 text-base-content'>
        <div className='w-[200px] h-[70px]'>
          <img className='w-full h-full' src={logo} alt='' />
        </div>
        <div className='text-[white]'>
          <span className='footer-title'>Services</span>
          <Link to={""} className='link link-hover'>
            Branding
          </Link>
          <Link to={""} className='link link-hover'>
            Design
          </Link>
          <Link to={""} className='link link-hover'>
            Marketing
          </Link>
          <Link to={""} className='link link-hover'>
            Advertisement
          </Link>
        </div>
        <div className='text-[white]'>
          <span className='footer-title'>Company</span>
          <Link to={""} className='link link-hover'>
            About us
          </Link>
          <Link to={""} className='link link-hover'>
            Contact
          </Link>
          <Link to={""} className='link link-hover'>
            Jobs
          </Link>
          <Link to={""} className='link link-hover'>
            Press kit
          </Link>
        </div>
      </div>
      <div className='lg:flex md:flex justify-between capitalize mx-8 pb-4 text-white'>
        <div>
          <h1>copyright &copy; 2022 online food</h1>
        </div>
        <div>
          <span className='lg:ml-8 md:ml-8 '>Privacy policy.</span>
          <span className='lg:ml-8 md:ml-8 ml-3'>terms of use</span>
          <span className='lg:ml-8 md:ml-8 ml-3'>pricing</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
