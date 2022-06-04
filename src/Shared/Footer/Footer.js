import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
const Footer = () => {
  return (
    <footer className='bg-[black]'>
      <div class='footer p-10 text-base-content'>
        <div className='w-[200px] h-[70px]'>
          <img className='w-full h-full' src={logo} alt='' />
        </div>
        <div className='text-[white]'>
          <span class='footer-title'>Services</span>
          <a class='link link-hover'>Branding</a>
          <a class='link link-hover'>Design</a>
          <a class='link link-hover'>Marketing</a>
          <a class='link link-hover'>Advertisement</a>
        </div>
        <div className='text-[white]'>
          <span class='footer-title'>Company</span>
          <a class='link link-hover'>About us</a>
          <a class='link link-hover'>Contact</a>
          <a class='link link-hover'>Jobs</a>
          <a class='link link-hover'>Press kit</a>
        </div>
      </div>
      <div className='flex justify-between capitalize text-white'>
        <div>
          <h1>copyright &copy; 2022 online food</h1>
        </div>
        <div>
          <span className='ml-8'>Privacy policy.</span>
          <span className='ml-8'>terms of use</span>
          <span className='ml-8'>pricing</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
