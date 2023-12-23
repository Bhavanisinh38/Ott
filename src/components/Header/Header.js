import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

// Css Files
import '../../css/header.css';

// Design Files
import { useMenu } from './MenuContext';
import Sidemenu from './Sidemenu'

// Images Common File
import * as Img from '../Img';

export default function Header() {
   
    // --- Header Js Start --- //
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [headerSticky, setheaderSticky] = useState('');
    // const [headerTop, setHeaderTop] = useState(0);
    const delta = 0;
  
    useEffect(() => {
      function handleScroll() {
        const st = window.scrollY;
  
        if (Math.abs(lastScrollTop - st) <= delta) return;
  
        if (st > lastScrollTop && lastScrollTop > 0) {
          // Downscroll code
          // setHeaderTop(0);
          setheaderSticky("active");
        } else {
          // Upscroll code
          // setHeaderTop(0);
          setheaderSticky('');
        }
        setLastScrollTop(st);
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollTop]);
    // --- Header Js End --- //


    const { toggleMenu } = useMenu();

    return (
      <>
      <header className={`custom-header ${headerSticky}`}>
        <div className="ch-inner">
          
          <div className="ch-left">
            {/* Website Logo Start */}
              <Link to="/" className="ch-logo">
                <img src={Img.logo_color} alt="adstart" />
              </Link>
            {/* Website Logo End */}
          </div>

          {/* Website Categories Menu Start */}
          <div className="ch-menu-bx">

            <Link to="/" className="cmb-item cmb-home-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
            </Link>

            <div className="cmb-drop-item">
              <div className="cmb-item">Shows</div>

              <div className="cmb-drop-bx">
                <div className="cmb-drop-inner">
                  <div className="cdi-main">
                    <Link to="/" className="cdi-main-item">Comedy</Link>
                    <Link to="/detail" className="cdi-main-item">Reality TV</Link>
                    <Link to="/" className="cdi-main-item">Crime</Link>
                    <Link to="/" className="cdi-main-item">Turkish TV</Link>
                    <Link to="/" className="cdi-main-item">Drama</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cmb-drop-item">
              <div className="cmb-item">Movies</div>

              <div className="cmb-drop-bx">
                <div className="cmb-drop-inner">
                  <div className="cdi-main">
                    <Link to="/" className="cdi-main-item">Comedy</Link>
                    <Link to="/" className="cdi-main-item">Reality TV</Link>
                    <Link to="/" className="cdi-main-item">Crime</Link>
                    <Link to="/" className="cdi-main-item">Turkish TV</Link>
                    <Link to="/" className="cdi-main-item">Drama</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cmb-drop-item">
              <div className="cmb-item">New & hot🔥</div>

              <div className="cmb-drop-bx">
                <div className="cmb-drop-inner">
                  <div className="cdi-main">
                    <Link to="/" className="cdi-main-item">Comedy</Link>
                    <Link to="/" className="cdi-main-item">Reality TV</Link>
                    <Link to="/" className="cdi-main-item">Crime</Link>
                    <Link to="/" className="cdi-main-item">Turkish TV</Link>
                    <Link to="/" className="cdi-main-item">Drama</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cmb-drop-item">
              <div className="cmb-item">Distro Tv</div>

              <div className="cmb-drop-bx">
                <div className="cmb-drop-inner">
                  <div className="cdi-main">
                    <Link to="/" className="cdi-main-item">Comedy</Link>
                    <Link to="/" className="cdi-main-item">Reality TV</Link>
                    <Link to="/" className="cdi-main-item">Crime</Link>
                    <Link to="/" className="cdi-main-item">Turkish TV</Link>
                    <Link to="/" className="cdi-main-item">Drama</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cmb-drop-item">
              <div className="cmb-item">Other<i className="fa fa-angle-down"></i></div>

              <div className="cmb-drop-bx">
                <div className="cmb-drop-inner">
                  <div className="cdi-main">
                    <Link to="/" className="cdi-main-item">Gold ⭐️</Link>
                    <Link to="/" className="cdi-main-item">Trailers</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* Website Categories Menu End */}


          <div className="ch-right">

            <div className="other-btn-bx">
              <div className="obb-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"/></svg>
              </div>
              <Link to="/notifications" className="obb-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
              </Link>
            </div>

            {/* Signup Btns Start */}
            <div className="signinup-btn-bx">
              <Link to="/signin" className="sip-btn">Login</Link>
              {/* <div className="sip-btn sip-account-btn ms-2">
                <img src={Img.demo_img1} alt="Name Here..." />
                Account
              </div> */}
            </div>
            {/* Signup Btns End */}

            {/* aside Menu Icon Start */}
            <div className="menu-icon-bx" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* aside Menu Icon End */}
          </div>
          
        </div>
      </header>

      <Sidemenu />
      </>
    );
}
  