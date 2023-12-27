import React from 'react';
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Images Common File
import * as Img from '../../components/Img';

// Design Files
import Mainvideoplayer from '../SingleItem/Mainvideoplayer';
import Card from '../SingleItem/Cardtem';
import Listitemslidertwo from '../Sliders/Listitemslidertwo';


export default function PageDetail() {
  return (
    <>
      <Helmet>
        <title>Detail | Adstar</title>
      </Helmet>

      {/* Main Video Player */}
      <Mainvideoplayer mainvideosrc={Img.demo_video} mainposter={Img.demobig_img5}/>
    
      <section className="pt-4">
        <div className="container-lg cl-custom">

            <div className="breadcrumb-bx">
                <Link className="breadcrumb-link" to="/">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                <Link className="breadcrumb-link" to="/">Categories<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                <Link className="breadcrumb-link breadcrumb-active" to="/">Animal</Link>
            </div>

            <div className="detail-main-bx">
                <div className="dpb-data-name">Animal</div>
                <div className="dpb-data-se">Hindi | Romance, Comedy, Action</div>
                <div className="dpb-data-about">Animal is a 2023 Indian Hindi-language action drama film directed and edited by Sandeep Reddy Vanga, who also co-wrote the screenplay with Pranay Reddy Vanga and Saurabh Gupta.</div>
            </div>

        </div>
      </section>

      {/* Related Shows */}
      <Listitemslidertwo sectiontitle="Related Shows"/>

      {/* Recommended */}
      <section className="pt-5">
          <div className="container-lg cl-custom cl-relative">
            <div className="section-heading">Recommended</div>
            <div className="listitems-row ci-two mt-2">
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img1}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img2}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img3}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img4}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img5}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img6}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img7}/>
              </div>

              <div className="card-outer-bx">
                <Card src={Img.demosmall_img1}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img2}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img3}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img4}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img5}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img6}/>
              </div>
            
              <div className="card-outer-bx">
                <Card src={Img.demosmall_img7}/>
              </div>

            </div>
          </div>
      </section>

      <div className="pt-5 pb-4"></div>
    </>
  );
};
