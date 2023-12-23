import React from 'react';
import {Link} from "react-router-dom";

// Images Common Files
import * as Img from '../../components/Img';

// Css Files
import '../../css/signinup.css'


export default function PageSignIn() {

    return(
        <>
            <div className="login-page-back-effect"></div>
            <div className="sign-in-up-bx">
    
                <div className='signinup-screen active' id="login-screen">
                    <Link to='/' className="back-btn" title="Back to Home">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" color="#F2F1F3" width="20px"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg>
                    </Link>
                    <img className='signinup-logo' src={Img.logo_color} alt='Adstar logo' />
                    <div className="screen-hed">Log in or sign up</div>

                    <form>

                        <div className="row">
                            <div className="col-12">
                                <div className="signinup-group sgli">
                                    <div className="group__label">Phone Number</div>
                                    <input type="number" placeholder="Enter phone number" />
                                    <span className="group_left_icon">+91</span>
                                </div>
                            </div>
                        </div>

                        <div className="site-info text-center">
                            By continuing you agree to Adstar <Link to="/terms">Terms & Conditions</Link> & <Link to="/privacy">Privacy Policy</Link>.
                        </div>

                    

                        <Link to='/signotp' className="login-submit-btn">Continue</Link>
                        <Link to='/signup' className="login-submit-btn">Continue</Link>

                        {/* <button type="button" className="login-submit-btn" desabled>Continue</button> */}

                        <div className="lsb-loader-btn">
                            <img src={Img.loading} alt="Please wait" />Please wait ....
                        </div>

                    </form>

                </div>

            </div>
        </>
    );
};