import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


export default function PageSitemap() {
  return (
    <div>
      <Helmet>
        <title>Sitemap | Adstar</title>
      </Helmet>


      <div className="breadcrumb-outer">
          <div className="container-lg">   
              <div className="breadcrumb-bx">
                  <Link className="breadcrumb-link" to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                  <Link className="breadcrumb-link breadcrumb-active">Sitemap</Link>
              </div>
          </div>
      </div>

      <section className="pt-3 pb-5">
          <div className="container-lg">
                <div className="page-heading">Sitemap</div>

                <span className="sitemap-heding mt-4">Usefull Links</span>
                <ul className="sitemap-ul">
                    <li>
                        <Link className="sitemap-link" to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                            Adstar
                        </Link>
                    </li>
                    <li>
                        <Link className="sitemap-link" to="/about">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="sitemap-link" to="/faqs">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                            FAQs
                        </Link>
                    </li>
                    <li>
                        <Link className="sitemap-link" to="/privacy">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link className="sitemap-link" to="/terms">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                            Terms & Conditions
                        </Link>
                    </li>
                    <li>
                        <Link className="sitemap-link" to="/contact">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg>
                            Contact
                        </Link>
                    </li>
                </ul>

          </div>
      </section>

  
    </div>
  );
};
