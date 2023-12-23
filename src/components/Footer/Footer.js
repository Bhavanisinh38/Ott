import React from 'react';
import {Link, NavLink} from "react-router-dom";

// Css Files
import '../../css/footer.css'

// Images Common Files
import * as Img from '../Img';

// Design Files
import Socialicon from '../Socialicon';

export default function Footer() {
    return (
    <>
        <footer className="pt-5">
            <div className="container-lg cl-custom">
                <div className="row">

                    <div className="col-lg-4 text-lg-start text-center mb-lg-0 mb-4">
                        <Link className='footer-logo' to="/">
                            <img src={Img.logo_color} alt="adstart" />
                        </Link>
                        <div className="footer-sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </div>

                    <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <div className="footer-heading">Company</div>
                        <div className="footer-links-bx">
                            <NavLink to="/about" className="footer-link">About</NavLink>
                            <NavLink to="/contact" className="footer-link">Contact</NavLink>
                            <NavLink to="/sitemap" className="footer-link">Sitemap</NavLink>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <div className="footer-heading">Legal</div>
                        <div className="footer-links-bx">
                            <NavLink to="/faqs" className="footer-link">FAQs</NavLink>
                            <NavLink to="/privacy" className="footer-link">Privacy Policy</NavLink>
                            <NavLink to="/terms" className="footer-link">Terms & Conditions</NavLink>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4">

                        <div className="footer-item-box">
                            <div className="footer-heading">Join our mailing list</div>
                            <form>
                                <div className="signinup-group newsletter-group">
                                    <input type="email" placeholder="you@example.com"/>
                                    <button type="submit" disabled><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                </div>
                            </form>
                        </div>
                        
                        <div className="footer-heading mt-4">Social media</div>
                        <Socialicon className="social-icon justify-content-start" />
                    </div>

                </div>
                <div className="footer-bottom">
                    <div className="copyright">© 2023 adstar. All Rights Reserved.</div>
                    <div className="mede-with">Made with
                        <span className="icons-box-made">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </span>
                        by: <a href="https://pmcommu.com/" target="_blank" rel="noreferrer">PM Communications</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
}